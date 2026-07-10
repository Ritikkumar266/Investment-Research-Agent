export async function getCompanyNews(company) {

    try {

        console.log("Company received by GNews:", company);

        const cleanCompany = company
            .replace(/[^\w\s]/g, "")
            .trim();

        console.log("Searching GNews for:", cleanCompany);

        const url =
            `https://gnews.io/api/v4/search?` +
            `q=${encodeURIComponent(cleanCompany)}&` +
            `lang=en&` +
            `country=us&` +
            `max=5&` +
            `apikey=${process.env.GNEWS_API_KEY}`;

        const response = await fetch(url);

        const data = await response.json();

        console.log("Status:", response.status);
        console.log("Response:", data);

        if (!response.ok) {
            throw new Error("Failed to fetch GNews");
        }

        return data.articles.map(article => ({
            title: article.title,
            description: article.description,
            content: article.content,
            url: article.url,
            source: article.source.name,
            publishedAt: article.publishedAt
        }));

    } catch (error) {

        console.error(error);
        throw error;

    }

}