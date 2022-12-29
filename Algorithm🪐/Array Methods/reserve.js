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

myAssets.reverse();

console.log(myAssets);
// Output: [
// {name: "MBOX", ATH: "15", currentPrice: "0,34"},
// {name: "Dogecoin", ATH: "0.69", currentPrice: "0.05"},
// {name: "Bitcoin", ATH: "69,000", currentPrice: "16,000"}
// ]