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
        const products = await prisma_1.default.products.create({
            data: {
                name,
                unit: Number(unit),
                price: Number(price)
            }
        });
        res.json({
            message: "Create products success!",
            results: products
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
});
exports.productsRouter.get("/", async (req, res) => {
    try {
        const products = await prisma_1.default.products.findMany();
        res.status(200).json({
            message: "Get all products success!",
            results: products
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
});
exports.productsRouter.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const products = await prisma_1.default.products.findUnique({
            where: {
                id: Number(id)
            }
        });
        res.status(200).json({
            message: "Get product detail success!",
            results: products
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
});
exports.productsRouter.patch("/:id", async (req, res) => {
    try {
        const { name, unit, price } = req.body;
        const { id } = req.params;
        const product = await prisma_1.default.products.update({
            where: {
                id: Number(id)
            },
            data: {
                name,
                unit: Number(unit),
                price: Number(price)
            }
        });
        res.status(200).json({
            message: "Edit data product success!",
            results: product
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
});
exports.productsRouter.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const product = await prisma_1.default.products.delete({
            where: {
                id: Number(id)
            }
        });
        res.status(200).json({
            message: "Delete data product success!",
            results: product
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
});
