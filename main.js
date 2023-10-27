const express = require("express");
const natural = require("natural");
const { NeuralNetwork } = require("brain.js");
const { trainingData } = require("./training-data");

const port = 4123;

const app = express();
const tokenizer = new natural.WordTokenizer();

app.use(express.json());

function tokenizeAndStemArr(inputData) {
  const tokenizedArr = tokenizer.tokenize(inputData);

  return tokenizedArr.map((token) => natural.PorterStemmerEs.stem(token));
}

const corpus = trainingData.map((item) => {
  return {
    input: tokenizeAndStemArr(item.input).reduce((p, c) => {
      p[c] = 1;

      return p;
    }, {}),
    output: {
      [item.output]: 1,
    },
  };
});

const netConfig = {
  hiddenLayers: [],
};

const net = new NeuralNetwork(netConfig);

console.info(net.train(corpus));
const a = net.toJSON();

console.log(a);

app.post("/process", (req, res) => {
  const { body } = req;

  if (!body?.input) {
    res.sendStatus(400);
  }

  const answer = net.run(
    tokenizeAndStemArr(body.input).reduce((p, c) => {
      p[c] = 1;

      return p;
    }, {})
  );

  res.json(answer);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${4123}`);
});
