import Web3 from 'web3';

let web3;

const connectWallet = async () => {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log("Подключение успешно!");
        } catch (error) {
            console.error("Пользователь отклонил доступ к кошельку.");
        }
    } else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
    } else {
        console.error("MetaMask не установлен.");
    }
    return web3
}


export default connectWallet;