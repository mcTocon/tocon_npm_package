async function Tocon(contractAdd) {
    console.log('Requesting account...');
    if (window.ethereum) {
        console.log(window.ethereum);
        const web3 = new Web3(window.ethereum);
        try {
            const account = await window.ethereum.request({ method: "eth_requestAccounts" })
            console.log(account)
            const toconTokenABI = [{
                "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }],
                "name": "balanceOf",
                "outputs": [{ "internalType": "uint256", "name": "balance", "type": "uint256" }],
                "stateMutability": "view",
                "type": "function"
            }];
            const contractAddress = contractAdd;
            const contract = new web3.eth.Contract(toconTokenABI, contractAddress);
            const address = window.ethereum.selectedAddress;
            const tokenBalance = await contract.methods.balanceOf(address).call();
            console.log("The number of the token's owned by the user:", tokenBalance);
        } catch (error) {
            console.log('Error connecting...', error);
        }
    } else {
        alert('Meta Mask not detected');
    }
}
