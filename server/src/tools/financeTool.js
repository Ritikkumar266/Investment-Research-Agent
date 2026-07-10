import YahooFinance from "yahoo-finance2";

const yahooFinance = new YahooFinance({
    suppressNotices: ["yahooSurvey"]
});

export async function getFinanceData(companyName) {
    try {

        let symbol;

        // If the user already entered a ticker
        if (companyName.length <= 5 && companyName === companyName.toUpperCase()) {
            symbol = companyName;
        } else {

            const search = await yahooFinance.search(companyName);

            console.log("Search Result:", search.quotes);

            if (!search.quotes || search.quotes.length === 0) {
                throw new Error("Company not found.");
            }

            // Choose the first equity result
            const company = search.quotes.find(
                q =>
                    q.symbol &&
                    q.quoteType === "EQUITY"
            );

            if (!company) {
                throw new Error("Company not found.");
            }

            symbol = company.symbol;
        }

        console.log("Using Symbol:", symbol);

        const quote = await yahooFinance.quote(symbol);

        const summary = await yahooFinance.quoteSummary(symbol, {
            modules: [
                "assetProfile",
                "summaryDetail",
                "defaultKeyStatistics"
            ]
        });

        return {
            symbol,
            company: quote.longName,
            price: quote.regularMarketPrice,
            currency: quote.currency,
            marketCap: quote.marketCap,
            peRatio: summary.summaryDetail?.trailingPE,
            dividendYield: summary.summaryDetail?.dividendYield,
            beta: summary.defaultKeyStatistics?.beta,
            sector: summary.assetProfile?.sector,
            industry: summary.assetProfile?.industry,
            website: summary.assetProfile?.website,
            employees: summary.assetProfile?.fullTimeEmployees,
            fiftyTwoWeekHigh: quote.fiftyTwoWeekHigh,
            fiftyTwoWeekLow: quote.fiftyTwoWeekLow
        };

    } catch (error) {
        console.error(error);
        throw error;
    }
}
export async function getHistoricalData(symbol) {

    try {

        const period2 = new Date();

        const period1 = new Date();
        period1.setMonth(period1.getMonth() - 1);

        const result = await yahooFinance.chart(symbol, {
            period1,
            period2,
            interval: "1d"
        });

        return result.quotes
            .filter(item => item.close !== null)
            .map(item => ({
                date: item.date.toISOString().split("T")[0],
                price: Number(item.close.toFixed(2))
            }));

    } catch (error) {
        throw new Error(error.message);
    }

}