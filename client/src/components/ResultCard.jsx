import StockChart from "./StockChart";

function ResultCard({ result }) {
    return (
        <div className="result-card">

            {/* Header */}
            <div className="result-header">

                <h2>{result.company}</h2>

                <span
                    className={
                        result.decision === "INVEST"
                            ? "badge invest"
                            : "badge pass"
                    }
                >
                    {result.decision}
                </span>

            </div>

            {/* AI Stats */}
            <div className="stats">

                <div>
                    <h4>Confidence</h4>
                    <p>{result.confidence}%</p>
                </div>

                <div>
                    <h4>Score</h4>
                    <p>{result.score}/100</p>
                </div>

                <div>
                    <h4>Risk</h4>
                    <p>{result.risk}</p>
                </div>

            </div>

            {/* Financial Data */}
            {result.finance && (

                <div className="finance-grid">

                    <div className="finance-box">
                        <h4>Current Price</h4>
                        <p>
                            {result.finance.price
                                ? `$${result.finance.price.toFixed(2)}`
                                : "N/A"}
                        </p>
                    </div>

                    <div className="finance-box">
                        <h4>Market Cap</h4>
                        <p>
                            {result.finance.marketCap
                                ? `$${(
                                      result.finance.marketCap /
                                      1_000_000_000_000
                                  ).toFixed(2)}T`
                                : "N/A"}
                        </p>
                    </div>

                    <div className="finance-box">
                        <h4>P/E Ratio</h4>
                        <p>
                            {result.finance.peRatio
                                ? result.finance.peRatio.toFixed(2)
                                : "N/A"}
                        </p>
                    </div>

                    <div className="finance-box">
                        <h4>EPS</h4>
                        <p>
                            {result.finance.eps
                                ? result.finance.eps.toFixed(2)
                                : "N/A"}
                        </p>
                    </div>

                    <div className="finance-box">
                        <h4>52W High</h4>
                        <p>
                            {result.finance.fiftyTwoWeekHigh
                                ? `$${result.finance.fiftyTwoWeekHigh.toFixed(2)}`
                                : "N/A"}
                        </p>
                    </div>

                    <div className="finance-box">
                        <h4>52W Low</h4>
                        <p>
                            {result.finance.fiftyTwoWeekLow
                                ? `$${result.finance.fiftyTwoWeekLow.toFixed(2)}`
                                : "N/A"}
                        </p>
                    </div>

                </div>

            )}

            {/* Stock Price Chart */}
            {result.history?.length > 0 && (
                <StockChart history={result.history} />
            )}

            {/* Summary */}
            <div className="summary">

                <h3>Summary</h3>

                <p>{result.summary}</p>

            </div>

            {/* Pros & Cons */}
            <div className="pros-cons">

                <div>

                    <h3>✅ Pros</h3>

                    <ul>

                        {result.pros?.map((pro, index) => (

                            <li key={index}>{pro}</li>

                        ))}

                    </ul>

                </div>

                <div>

                    <h3>❌ Cons</h3>

                    <ul>

                        {result.cons?.map((con, index) => (

                            <li key={index}>{con}</li>

                        ))}

                    </ul>

                </div>

            </div>

            {/* Latest News */}
            {result.news?.length > 0 && (

                <div className="news-section">

                    <h3>📰 Latest News</h3>

                    {result.news.map((article, index) => (

                        <div className="news-card" key={index}>

                            <h4>{article.title}</h4>

                            <p>
                                {article.description ||
                                    article.content ||
                                    "No description available."}
                            </p>

                            <a
                                href={article.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Read Full Article →
                            </a>

                        </div>

                    ))}

                </div>

            )}

        </div>
    );
}

export default ResultCard;