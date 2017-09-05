# Truffle DevOps example

This is a self contained pre-configured [Truffle](http://TruffleFramework.com) project that can be compiled and tested on a build server.

TODO: Add link to blog post.

## Running locally

1. Clone the repo
2. make sure you have npm 5.3.0 or later
3. Run `npm install` to restore the npm packages. 
4. you can now compile and run the tests using npx to execute the npm packages that are in the DevDependencies

```
npx truffle compile
npx truffle test --network localtestrpc
```

## How this works

I'm taking advantage of 2 important things:

1. the new `npx` command allows you to execute node packages that used to need to be installed globally, and instead you can install as a DevDependency and run it just in the project folder.
2. I specified a new network in `truffle.js` that uses the TestRPC provider. This will make Truffle run TestRPC temporarily for the duration of the commmand, and then tear it down again.

### running on a build server

to run on a build server the critical commands are:

```
npm install
npx truffle compile
npx truffle test --network localtestrpc
```

You may also want to change the mocha reporter to output to a .xml file. You can do this by modifying the `truffle.js` file

e.g. change `mocha: {  reporter: "spec",` and replace with `mocha: {  reporter: "mocha-junit-reporter",`