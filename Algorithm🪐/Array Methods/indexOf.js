const myAssets = [
    {
        name: "Bitcoin",
        ATH: "69,000",
        currentPrice: "16,000"
    },
    {
        name: "Ethereum",
        ATH: "5000",
        currentPrice: "1,100"
    },
    {
        name: "MBOX",
        ATH: "15",
        currentPrice: "0,34"
    }
]

const bitcoinIndex = myAssets.indexOf({name: "Bitcoin", ATH: "69,000", 
currentPrice: "16,000"});

console.log(bitcoinIndex);
// Output: 1

const litecoinIndex = myAssets.indexOf({name: "Litecoin", ATH: "420", 
currentPrice: "80"});

console.log(litecoinIndex);
// Output: -1