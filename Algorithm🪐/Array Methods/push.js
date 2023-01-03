


const newLength = myAssets.
    push({
        name: "Litecoin",
        ATH: "420",
        currentPrice: "80"
    });

console.log(myAssets);
// Output: [
//   {name: "Bitcoin", ATH: "69,000", currentPrice: "16,000"},
//   {name: "Ethereum", ATH: "5000", currentPrice: "1,100"],
//   {name: "MBOX", ATH: "15", currentPrice: 0.34},
//   {name: "Litecoin", ATH: "420", currentPrice: "80"}
// ]

console.log(newLength);
// Output: 5