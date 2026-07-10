import { getFinanceData } from "./src/tools/financeTool.js";

const result = await getFinanceData("Apple");

console.log(result);