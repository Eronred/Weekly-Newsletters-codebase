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

const lastBitcoinIndex = myAssets.lastIndexOf({
    name: "Bitcoin", ATH: "69,000",
    currentPrice: "16,000"
});

console.log(lastBitcoinIndex);
// Output: 2

const lastLitecoinIndex = myAssets.lastIndexOf({
    name: "Litecoin", ATH: "420",
    currentPrice: "80"
});

console.log(lastLitecoinIndex);
// Output: -1