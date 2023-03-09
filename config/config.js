const data = {
    supply: 800000000,
    csupply: 100000000,
    reserve: 400000000,
    networt_name: "MBCash Main",
    coinName: "MBCash",
    symbol: "MBCASH",
    decimal: 18,
    networkid: 153,
    baseBlockReward: 2,//Proof of work value 2 Proof of Stake value 0
    http_provider: 'https://rpcm.coinbiten.com/',
    ws_provider: 'ws://155.133.23.127:9095',
    dbname: "mbcash",
    //Coin Price Call From Livecoinwath API
    livecoinwatchapi: "https://api.livecoinwatch.com/coins/single",
    x_api_key: "394bac29-70e9-4034-967d-845c921f1f95",
    currency_code: "MBCASH",
    test_network: {
        networt_name: "Test MBCASH Coin",
        coinName: "Test MBCASH",
        symbol: "MBCASH",
        decimal: 18,
        networkid: 165,
        http_provider: '',
        ws_provider: ''
    }
    //Test Network Optional For API
}

module.exports = data