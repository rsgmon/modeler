/**
 * Created by Rye on 1/13/2016.
 */
var mongoose = require('mongoose');

var portfolioSchema = mongoose.Schema({ positions: [{
    symbol: String,
    assetType: String,
    region: String,
    sector: String,
    name: String,
    duration: Number,
    yield: Number,
    dividendYield: Number,
    benchmarkWeight: Number,
    targetWeight: Number,
    change: Number
}]
})

var Portfolio = mongoose.model('Portfolio', portfolioSchema);

function createDefaultPortfolios() {
    Portfolio.find({}).exec(function(err, collection){
        if (collection.length === 0 ) {
            Portfolio.create({
                positions: [{"symbol":"AGG","assetType":"Fixed Income","region":"United States","sector":"Aggregate","name":"iShares Core Total US Bond Market","duration":4.78,"yield":0.025,"dividendYield":0,"benchmarkWeight":0.25,"targetWeight":0.06,"change":0},
                    {"symbol":"MBB","assetType":"Fixed Income","region":"United States","sector":"MBS","name":"iShares MBS Bond ETF","duration":2.98,"yield":0.0182,"dividendYield":0,"benchmarkWeight":0,"targetWeight":0.06,"change":0},
                    {"symbol":"EDV","assetType":"Fixed Income","region":"United States","sector":"Treasury","name":"Vanguard Extended Duration Treasury","duration":24.72,"yield":0.0303,"dividendYield":0,"benchmarkWeight":0,"targetWeight":0.06,"change":0},
                    {"symbol":"LQD","assetType":"Fixed Income","region":"United States","sector":"Corporate","name":"iShares Investment Grade Corporate Bond ETF","duration":7.75,"yield":0.0297,"dividendYield":0,"benchmarkWeight":0,"targetWeight":0.06,"change":0},
                    {"symbol":"MUB","assetType":"Fixed Income","region":"United States","sector":"Muni","name":"ishares S&P National Municipal Bond Fund","duration":6.1,"yield":0.0258,"dividendYield":0,"benchmarkWeight":0.05,"targetWeight":0.06,"change":0},
                    {"symbol":"IBND","assetType":"Fixed Income","region":"International","sector":"Corporate","name":"SPDR Barclays International Corporate Bd","duration":6.03,"yield":0.0114,"dividendYield":0,"benchmarkWeight":0.075,"targetWeight":0.06,"change":0},
                    {"symbol":"HYXU","assetType":"Fixed Income","region":"International","sector":"High Yield","name":"iShares Global ex USD High Yield Corp Bd","duration":3.1,"yield":0.0443,"dividendYield":0,"benchmarkWeight":0,"targetWeight":0.06,"change":0},
                    {"symbol":"IGOV","assetType":"Fixed Income","region":"International","sector":"Government","name":"iShares S&P/Citigroup International Treasury Bond Fund","duration":6.68,"yield":0.0174,"dividendYield":0,"benchmarkWeight":0.075,"targetWeight":0.06,"change":0},
                    {"symbol":"EBND","assetType":"Fixed Income","region":"Emerging Markets","sector":"Corporate","name":"SPDR® Barclays Emerging Markets Local Bond ETF","duration":4.98,"yield":0.0443,"dividendYield":0,"benchmarkWeight":0.05,"targetWeight":0.06,"change":0},
                    {"symbol":"SPY","assetType":"Equities","region":"United States","sector":"Large","name":"SPDR S&P 500 ETF","duration":0,"yield":0,"dividendYield":0.03,"benchmarkWeight":0.1444,"targetWeight":0.06,"change":0},
                    {"symbol":"VO","assetType":"Equities","region":"United States","sector":"Mid","name":"Vanguard Mid-Cap","duration":0,"yield":0,"dividendYield":0.15,"benchmarkWeight":0.0534,"targetWeight":0.06,"change":0},
                    {"symbol":"VB","assetType":"Equities","region":"United States","sector":"Small","name":"Vanguard Small-Cap ETF","duration":0,"yield":0,"dividendYield":0.01,"benchmarkWeight":0.0172,"targetWeight":0.06,"change":0},
                    {"symbol":"VGK","assetType":"Equities","region":"Europe","sector":"Large","name":"Vanguard FTSE Europe","duration":0,"yield":0,"dividendYield":0.035,"benchmarkWeight":0.14785,"targetWeight":0.06,"change":0},
                    {"symbol":"VPL","assetType":"Equities","region":"Asia","sector":"Large","name":"Vanguard FTSE Pacific ","duration":0,"yield":0,"dividendYield":0.035,"benchmarkWeight":0.0772,"targetWeight":0.06,"change":0},
                    {"symbol":"VWO","assetType":"Equities","region":"Emerging Markets","sector":"Large","name":"Vanguard FTSE Emerging Markets","duration":0,"yield":0,"dividendYield":0.045,"benchmarkWeight":0.06,"targetWeight":0.06,"change":0},
                    {"symbol":"CASH","assetType":"Cash","region":"Cash","sector":"Cash","name":"Cash","duration":0,"yield":0,"dividendYield":0,"benchmarkWeight":0,"targetWeight":0.1,"change":0}]});
        }
    });
}
exports.createDefaultPortfolios = createDefaultPortfolios;