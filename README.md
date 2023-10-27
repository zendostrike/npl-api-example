## Requirements

### Mac OS X

- Python 2.7
- XCode

### Ubuntu/Debian

- Python 2.7
- A GNU C++ environment (available via the build-essential package on apt)
- libxi-dev
- Working and up to date OpenGL drivers
- GLEW
- pkg-config
- sudo apt-get install -y build-essential libxi-dev libglu1-mesa-dev libglew-dev pkg-config

### Windows

- Python 2.7
- Microsoft Visual Studio
- d3dcompiler_47.dll should be in c:\windows\system32, but if isn't then you can find another copy in the deps/ folder
- (optional) A modern nodejs supporting es6 to run some examples https://iojs.org/en/es6.html

## USE

Make a post to `http://localhost:4123/process` with the following body

```
{
  input: "Hello world"
}
```
