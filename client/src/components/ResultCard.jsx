function ResultCard({ result }) {

    return (

        <div className="result-card">

            <h2>{result.company}</h2>

            <h3>{result.decision}</h3>

            <p>

                <strong>Confidence:</strong>

                {" "}

                {result.confidence}%

            </p>

            <p>

                <strong>Investment Score:</strong>

                {" "}

                {result.score}/100

            </p>

            <p>

                <strong>Risk:</strong>

                {" "}

                {result.risk}

            </p>

            <h4>Summary</h4>

            <p>{result.summary}</p>

            <h4>Pros</h4>

            <ul>

                {

                    result.pros.map((item,index)=>(

                        <li key={index}>{item}</li>

                    ))

                }

            </ul>

            <h4>Cons</h4>

            <ul>

                {

                    result.cons.map((item,index)=>(

                        <li key={index}>{item}</li>

                    ))

                }

            </ul>

        </div>

    );

}

export default ResultCard;