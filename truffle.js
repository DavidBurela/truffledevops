var TestRPC = require("ethereumjs-testrpc");

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    // add a new network definition that will self host TestRPC
    localtest: {
      provider: TestRPC.provider(),
      network_id:"*"
    }
  },
  // add a section for mocha defaults
  mocha: {
    reporter: "spec",
    reporterOptions: {
      mochaFile: 'TEST-truffle.xml'
    }
  }
};
