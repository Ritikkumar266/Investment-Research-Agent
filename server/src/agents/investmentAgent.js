import OpenAI from "openai";

import { investmentPrompt } from "../prompts/investmentPrompt.js";
import { getFinanceData, getHistoricalData } from "../tools/financeTool.js";
import { getCompanyNews } from "../tools/newsTool.js";

export async function runInvestmentAgent(company, symbol) {

    console.log(
        "OPENROUTER_API_KEY:",
        process.env.OPENROUTER_API_KEY ? "Loaded ✅" : "Missing ❌"
    );

    const client = new OpenAI({
        apiKey: process.env.OPENROUTER_API_KEY,
        baseURL: "https://openrouter.ai/api/v1",
    });

    // Finance data
    const finance = await getFinanceData(symbol || company);

    // Historical prices
    const history = await getHistoricalData(finance.symbol);

    // Latest news
const news = await getCompanyNews(finance.company);
    // Prompt
    const prompt = `
${investmentPrompt}

Company:
${company}

====================================

Financial Data:

${JSON.stringify(finance, null, 2)}

====================================

Latest News:

${JSON.stringify(news, null, 2)}

====================================

Analyze the company using BOTH the financial data and the latest news.

Decide whether an investor should INVEST or PASS.

Return ONLY valid JSON.
`;

    const completion = await client.chat.completions.create({
        model: process.env.OPENROUTER_MODEL,
        messages: [
            {
                role: "user",
                content: prompt,
            },
        ],
        temperature: 0.3,
    });

    const aiResult = JSON.parse(
        completion.choices[0].message.content
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim()
    );

    return {
        ...aiResult,
        finance,
        news,
        history,
    };
}