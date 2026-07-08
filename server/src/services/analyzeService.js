export const analyzeCompanyService = (company) => {

    return {

        company,

        decision: "INVEST",

        confidence: 92,

        score: 88,

        summary:
            `${company} is financially strong with steady growth.`,

        pros: [

            "Strong revenue growth",

            "Healthy cash flow",

            "Market leader"

        ],

        cons: [

            "High valuation",

            "Strong competition"

        ],

        risk: "Medium"

    };

};