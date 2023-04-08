const Router = require('express');
const router = Router();
const axios = require('axios');


router.get('/transaction/:txHash',
    async (req, res) => {
        let txHash = req.params.txHash;                   
        try {
            const { Network, Alchemy } = require("alchemy-sdk");

            // Optional config object, but defaults to demo api-key and eth-mainnet.
            const settings = {
            apiKey: "gX_XpqWMFyT7w8fqtWokBIX7oe3Eas0-", // Replace with your Alchemy API Key.
            network: Network.ETH_MAINNET, // Replace with your network.
            };
            const alchemy = new Alchemy(settings);

            alchemy.core
            .getTransactionReceipt(
                txHash // Transaction hash of the transaction for which you want to get information.
            )
            .then((data)=>{
                res.status(200).json(data);
            });
        } catch (error) {
            console.error(error);
            if ((error.response.data.message) === "Item not found or argument invalid"){
                res.send("Item not found or argument invalid")
            }
        }
    }
);


router.get('/block/:txHash',
    async (req, res) => {
        let txHash = req.params.txHash;                   
        try {
            const { Network, Alchemy } = require("alchemy-sdk");

            // Optional config object, but defaults to demo api-key and eth-mainnet.
            const settings = {
            apiKey: "gX_XpqWMFyT7w8fqtWokBIX7oe3Eas0-", // Replace with your Alchemy API Key.
            network: Network.ETH_MAINNET, // Replace with your network.
            };
            const alchemy = new Alchemy(settings);

            alchemy.core
            .getBlockWithTransactions(
                txHash // Transaction hash of the transaction for which you want to get information.
            )
            .then((data)=>{
                res.status(200).json(data);
            });
        } catch (error) {
            console.error(error);
            if ((error.response.data.message) === "Item not found or argument invalid"){
                res.send("Item not found or argument invalid")
            }
        }
    }
);



module.exports = router;
