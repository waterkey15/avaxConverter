import Web3 from 'web3'
import { ethers } from "ethers";

const TreasuryABI = require("../contracts/treasury.json");
const TreasuryAddress = "0xca2fB30B9edAE5abB2F35aD18EF4d6Dc8ce97453"


let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
let tempSigner = tempProvider.getSigner();



let tempContractTreasury = new ethers.Contract(
    TreasuryAddress,
    TreasuryABI,
    tempSigner
);

export const sendAvaxValueGivenFLW = async () => {
        console.log("get started");

        const tx = await tempContractTreasury.computeInitialPriceInAvax(5);
        // await tx.wait();
        var hexType = tx._hex;
        console.log(hexType)
        var stringType = hexType.toString();
        console.log(stringType)
        var intVersion = (parseInt(stringType));
        console.log(intVersion);

        return parseFloat(intVersion);
    
}