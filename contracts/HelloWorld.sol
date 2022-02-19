pragma solidity 0.8.4;

contract HelloWorld {
    string public message;
    address public owner;

    constructor(string memory _message) {
        owner = msg.sender;
        message = _message;
    }

    function hello() public view returns (string memory) {
        return message;
    }

    function setMessage(string memory _msg) public payable {
        require(msg.value > 1 ether);
        require(owner == msg.sender);

        message = _msg;
    }
}
