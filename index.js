async function Tocon_owner_721(campaignId){let contractAddress;try{const response=await fetch(`https://staging.tocon.online/campaign/api/v1/tocon-assets/online/${campaignId}`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});const responseData=await response.json();contractAddress=responseData.contractAddress;if(window.ethereum){const web3=new Web3(window.ethereum);const account=await window.ethereum.request({method:"eth_requestAccounts"});const toconTokenABI=[{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"balance",type:"uint256"}],stateMutability:"view",type:"function"}];const contract=new web3.eth.Contract(toconTokenABI,contractAddress.toLowerCase());const address=window.ethereum.selectedAddress;const tokenBalance=await contract.methods.balanceOf(address).call();if(tokenBalance>0){return true}else{return false}}else{alert("No wallet detected");return false}}catch(error){console.error(error);return error}}async function Tocon_owner_1155(campaignId,id){let contractAddress;try{const response=await fetch(`https://staging.tocon.online/campaign/api/v1/tocon-assets/online/${campaignId}`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});const responseData=await response.json();contractAddress=responseData.contractAddress;if(window.ethereum){const web3=new Web3(window.ethereum);const account=await window.ethereum.request({method:"eth_requestAccounts"});const toconTokenABI=[{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"id",type:"uint256"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}];const Id=id;const contract=new web3.eth.Contract(toconTokenABI,contractAddress.toLowerCase());const address=window.ethereum.selectedAddress;const tokenBalance=await contract.methods.balanceOf(address,Id).call();if(tokenBalance>0){return true}else{return false}}else{alert("No wallet detected");return false}}catch(error){console.error(error);return error}}