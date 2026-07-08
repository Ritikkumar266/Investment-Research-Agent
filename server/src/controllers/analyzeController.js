import { analyzeCompanyService } from "../services/analyzeService.js";

export const analyzeCompany = (req, res) => {

    const result = analyzeCompanyService(req.body.company);

    res.json(result);

};