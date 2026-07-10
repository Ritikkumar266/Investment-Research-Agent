import YahooFinance from "yahoo-finance2";

const yahooFinance = new YahooFinance({
    suppressNotices: ["yahooSurvey"]
});

export const searchCompany = async (req, res) => {
    try {

        const q = req.query.q;

        if (!q || q.length < 2) {
            return res.json([]);
        }

        const result = await yahooFinance.search(q);

        const companies = result.quotes
            .filter(item => item.quoteType === "EQUITY")
            .slice(0, 8)
            .map(item => ({
                symbol: item.symbol,
                name: item.longname || item.shortname,
                exchange: item.exchange
            }));

        res.json(companies);

    } catch (err) {
        console.error(err);
        res.status(500).json([]);
    }
};