import { useState } from "react";
import ResultCard from "../components/ResultCard";
import "../styles/home.css";
import api from "../services/api";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import AnalyzeButton from "../components/AnalyzeButton";
import LoadingCard from "../components/LoadingCard";

function Home() {

    const [company, setCompany] = useState("");

    const [suggestions, setSuggestions] = useState([]);

    const [selectedSymbol, setSelectedSymbol] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    const [loadingMessage, setLoadingMessage] = useState("");

    const [result, setResult] = useState(null);

    const handleAnalyze = async () => {

        if (!company.trim()) {

            alert("Please enter a company name.");

            return;

        }

        try {

            setIsLoading(true);

            setLoadingMessage("Analyzing company...");

            const response = await api.post("/api/analyze", {

                company,

                symbol: selectedSymbol

            });

            console.log(response.data);

            setResult(response.data);

        }

        catch (error) {

            console.error(error);

            alert(error.response?.data?.message || "Something went wrong.");

        }

        finally {

            setIsLoading(false);

        }

    };

    return (

        <main className="home-container">

            <Header />

            {

                isLoading ?

                    <LoadingCard message={loadingMessage} />

                    :

                    <div className="search-container">

                        <SearchBar

                            company={company}

                            setCompany={setCompany}

                            suggestions={suggestions}

                            setSuggestions={setSuggestions}

                            setSelectedSymbol={setSelectedSymbol}

                        />

                        <AnalyzeButton

                            onAnalyze={handleAnalyze}

                            isLoading={isLoading}

                        />

                    </div>

            }

            {

                result &&

                <ResultCard result={result} />

            }

        </main>

    );

}

export default Home;