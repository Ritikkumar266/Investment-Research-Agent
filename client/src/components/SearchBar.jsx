import { useEffect } from "react";
import { searchCompanies } from "../services/searchService";

function SearchBar({

    company,

    setCompany,

    suggestions,

    setSuggestions,

    setSelectedSymbol

}) {

 useEffect(() => {

    console.log("Searching for:", company);

    const timer = setTimeout(async () => {

        if (company.trim().length < 2) {
            setSuggestions([]);
            return;
        }

        try {

            const companies = await searchCompanies(company);

            console.log("Companies:", companies);

            setSuggestions(companies);

        } catch (err) {

            console.error(err);

        }

    }, 400);

    return () => clearTimeout(timer);

}, [company]);

    return (

        <div className="search-wrapper">

            <input

                type="text"

                placeholder="Search company (Apple, Microsoft...)"

                value={company}

                onChange={(e) => {

                    setCompany(e.target.value);

                    setSelectedSymbol("");

                }}

            />

            {

                suggestions?.length > 0 && (

                    <div className="suggestions">

                        {

                            suggestions.map((item) => (

                                <div

                                    key={item.symbol}

                                    className="suggestion"

                                    onClick={() => {

                                        setCompany(item.name);

                                        setSelectedSymbol(item.symbol);

                                        setSuggestions([]);

                                    }}

                                >

                                    <strong>{item.name}</strong>

                                    <br />

                                    <small>

                                        {item.symbol}

                                        {" • "}

                                        {item.exchange}

                                    </small>

                                </div>

                            ))

                        }

                    </div>

                )

            }

        </div>

    );

}

export default SearchBar;