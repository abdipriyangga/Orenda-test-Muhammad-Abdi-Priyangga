"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRouter = void 0;
const express_1 = __importDefault(require("express"));
const prisma_1 = __importDefault(require("./prisma"));
exports.productsRouter = express_1.default.Router();
exports.productsRouter.post("/", async (req, res) => {
    try {
        const { name, unit, price } = req.body;
        console.log(name);
        console.log(unit);
        console.log(price);
        const products = await prisma_1.default.products.create({
            data: {
                name,
                unit: Number(unit),
                price: Number(price)
            }
        });
        console.log("sda", products);
        res.json({
            message: "Create products success!",
            results: products
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        });
        console.error(error);
    }
});
