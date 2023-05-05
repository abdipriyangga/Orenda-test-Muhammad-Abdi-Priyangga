
import dotenv from "dotenv";
dotenv.config();
import express from "express"
import bodyParser from "body-parser";
import { customerRouter } from './src/customer';
import { productsRouter } from "./src/products";
import { ordersRouter } from "./src/orders";
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const app = express();
const cors = require("cors");

app.use(express.json())

const PORT = process.env.PORT
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.listen(PORT, () => console.log(`⚡️[server]: Server is running on port ${PORT}`))

app.get('/', (req, res) => {
    res.send('Welcome to API Orenda Test!')
})
app.use(cors())
app.use("/customers", customerRouter)
app.use("/products", productsRouter)
app.use("/order", ordersRouter)