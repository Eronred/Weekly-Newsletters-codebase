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

const hasEthereum = myAssets.includes(
    {
        name: "Ethereum",
        ATH: "5000",
        currentPrice: "1,100"
    }
);

console.log(hasEthereum);
// Output: true

const hasLitecoin = myAssets.includes(
    {
        name: "Litecoin",
        ATH: "420",
        currentPrice: "80"
    }
);

console.log(hasLitecoin);
   // Output: false