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


const newAssets = [  
    { name: "Litecoin", ATH: "420", currentPrice: "80" },  
    { name: "Ripple", ATH: "3.84", currentPrice: "0.70" },
    ];
    
    const allAssets = myAssets.concat(newAssets);
    
    console.log(allAssets);
    // Output: [
    //   {name: "Bitcoin", ATH: "69,000", currentPrice: "16,000"},
    //   {name: "Ethereum", ATH: "5000", currentPrice: "1,100"},
    //   {name: "MBOX", ATH: "15", currentPrice: "0,34"},
    //   {name: "Litecoin", ATH: "420", currentPrice: "80"},
    //   {name: "Ripple", ATH: "3.84", currentPrice: "0.70"}
    // ]