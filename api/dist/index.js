"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const customer_1 = require("./src/customer");
const products_1 = require("./src/products");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = process.env.PORT;
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.listen(PORT, () => console.log(`⚡️[server]: Server is running on port ${PORT}`));
app.get('/', (req, res) => {
    res.send('Welcome to API Orenda Test!');
});
app.use("/customers", customer_1.customerRouter);
app.use("/products", products_1.productsRouter);
