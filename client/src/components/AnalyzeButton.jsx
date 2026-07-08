function AnalyzeButton({ onAnalyze, isLoading }) {

    return (

        <button
            onClick={onAnalyze}
            disabled={isLoading}
        >

            {isLoading ? "Analyzing..." : "Analyze Company"}

        </button>

    );

}

export default AnalyzeButton;