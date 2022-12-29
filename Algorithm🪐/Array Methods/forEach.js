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

myAssets.forEach(asset => console.log(`${asset.name}: $${asset.currentPrice}`));
// Output:
// "Bitcoin: $16,000"
// "Ethereum: $1,100"
// "MBOX: $0,34"