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

const assetString = myAssets.map(asset => asset.name).join(" - ");

console.log(assetString);
// Output: "Bitcoin - Ethereum - MBOX"