const HelloWorld = artifacts.require("HelloWorld");

contract("HelloWorld", accounts => {

    it("correct msg", async () => {
        let instance = await HelloWorld.deployed();
        let message = instance.message();
        assert(message, "hey")
    });

    it("valid owner accounts", async () => {
        let instance = await HelloWorld.deployed();
        let owner = instance.owner();
        assert(owner, accounts[0]);
    })

})