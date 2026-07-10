import dotenv from "dotenv";
dotenv.config();

import { getCompanyNews } from "./src/tools/newsTool.js";

const news = await getCompanyNews("Apple");

console.log(news);