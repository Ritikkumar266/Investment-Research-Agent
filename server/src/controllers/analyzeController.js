import { analyzeCompanyService } from "../services/analyzeService.js";

export const analyzeCompany = async (req, res) => {
    try {

        const { company } = req.body;

        if (!company) {
            return res.status(400).json({
                message: "Company name is required."
            });
        }

        const result = await analyzeCompanyService(
            req.body.company,
            req.body.symbol
        );
        res.status(200).json(result);

    } catch (error) {

        console.error("Analyze Controller Error:", error);

        res.status(500).json({
            message: error.message || "Internal Server Error"
        });

    }
};