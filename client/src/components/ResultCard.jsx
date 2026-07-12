import StockChart from "./StockChart";
import CompanyLogo from "./CompanyLogo";

function ResultCard({ result }) {
    return (
        <div className="result-card">

            {/* ================= HEADER ================= */}

            <div className="result-header">

                <div className="company-info">

                    <CompanyLogo
                        symbol={result.finance?.symbol}
                        company={result.company}
                    />

                    <div>

                        <h2>{result.company}</h2>

                        <p className="ticker">
                            {result.finance?.symbol} • {result.finance?.sector || "Unknown Sector"}
                        </p>

                        {result.finance?.website && (
                            <a
                                href={result.finance.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="company-site"
                            >
                                🌐 Official Website
                            </a>
                        )}

                    </div>

                </div>

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

            {/* ================= AI STATS ================= */}

            <div className="stats">

                <div>
                    <h4>Confidence</h4>
                    <p>{result.confidence}%</p>
                </div>

                <div>
                    <h4>AI Score</h4>
                    <p>{result.score}/100</p>
                </div>

                <div>
                    <h4>Risk</h4>
                    <p>{result.risk}</p>
                </div>

            </div>

            {/* ================= FINANCIAL DATA ================= */}

            {result.finance && (

                <div className="finance-grid">

                    <div className="finance-box">
                        <h4>💲 Current Price</h4>
                        <p>
                            {result.finance.price
                                ? `$${result.finance.price.toFixed(2)}`
                                : "N/A"}
                        </p>
                    </div>

                    <div className="finance-box">
                        <h4>🏢 Market Cap</h4>
                        <p>
                            {result.finance.marketCap
                                ? `$${(result.finance.marketCap / 1_000_000_000_000).toFixed(2)}T`
                                : "N/A"}
                        </p>
                    </div>

                    <div className="finance-box">
                        <h4>📈 P/E Ratio</h4>
                        <p>
                            {result.finance.peRatio
                                ? result.finance.peRatio.toFixed(2)
                                : "N/A"}
                        </p>
                    </div>

                    <div className="finance-box">
                        <h4>💰 EPS</h4>
                        <p>
                            {result.finance.eps
                                ? result.finance.eps.toFixed(2)
                                : "N/A"}
                        </p>
                    </div>

                    <div className="finance-box">
                        <h4>📊 Beta</h4>
                        <p>
                            {result.finance.beta
                                ? result.finance.beta.toFixed(2)
                                : "N/A"}
                        </p>
                    </div>

                    <div className="finance-box">
                        <h4>💵 Dividend Yield</h4>
                        <p>
                            {result.finance.dividendYield
                                ? `${(result.finance.dividendYield * 100).toFixed(2)}%`
                                : "N/A"}
                        </p>
                    </div>

                    <div className="finance-box">
                        <h4>📈 52W High</h4>
                        <p>
                            {result.finance.fiftyTwoWeekHigh
                                ? `$${result.finance.fiftyTwoWeekHigh.toFixed(2)}`
                                : "N/A"}
                        </p>
                    </div>

                    <div className="finance-box">
                        <h4>📉 52W Low</h4>
                        <p>
                            {result.finance.fiftyTwoWeekLow
                                ? `$${result.finance.fiftyTwoWeekLow.toFixed(2)}`
                                : "N/A"}
                        </p>
                    </div>

                    <div className="finance-box">
                        <h4>🏭 Industry</h4>
                        <p>
                            {result.finance.industry || "N/A"}
                        </p>
                    </div>

                    <div className="finance-box">
                        <h4>👥 Employees</h4>
                        <p>
                            {result.finance.employees
                                ? result.finance.employees.toLocaleString()
                                : "N/A"}
                        </p>
                    </div>

                </div>

            )}

            {/* ================= STOCK CHART ================= */}

            {result.history?.length > 0 && (
                <StockChart history={result.history} />
            )}

            {/* ================= SUMMARY ================= */}

            <div className="summary">

                <h3>📄 AI Summary</h3>

                <p>{result.summary}</p>

            </div>

            {/* ================= PROS & CONS ================= */}

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

            {/* ================= NEWS ================= */}

            {result.news?.length > 0 && (

                <div className="news-section">

                    <h3>📰 Latest News</h3>

                    {result.news.map((article, index) => (

                        <div className="news-card" key={index}>

                            {article.image && (

                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="news-image"
                                />

                            )}

                            <h4>{article.title}</h4>

                            <small>

                                {article.source || "Unknown Source"}

                                {" • "}

                                {article.publishedAt
                                    ? new Date(article.publishedAt).toLocaleDateString()
                                    : "Unknown Date"}

                            </small>

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