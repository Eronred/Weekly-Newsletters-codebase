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

myAssets.copyWithin(-2, 0, 2);

console.log(myAssets);
// Output: [
//   {name: "Dogecoin", ATH: "0.69", currentPrice: "0.05"},
//   {name: "Bitcoin", ATH: "69,000", currentPrice: "16,000"},
//   {name: "Bitcoin", ATH: "69,000", currentPrice: "16,000"},
//   {name: "MBOX", ATH: "15", currentPrice: "0,34"}
// ]