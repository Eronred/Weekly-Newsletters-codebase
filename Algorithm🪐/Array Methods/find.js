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

const highestATH = myAssets.find(asset => 
    asset.ATH === Math.max(...myAssets.map(asset => asset.ATH)
 ));

console.log(highestATH);
// Output: {name: "Bitcoin", ATH: "69,000", currentPrice: "16,000"}