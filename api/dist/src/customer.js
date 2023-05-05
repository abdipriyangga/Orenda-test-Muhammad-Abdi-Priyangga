"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerRouter = void 0;
const express_1 = __importDefault(require("express"));
const prisma_1 = __importDefault(require("./prisma"));
exports.customerRouter = express_1.default.Router();
exports.customerRouter.post("/", async (req, res) => {
    try {
        const { name, phone, email, address } = req.body;
        const customer = await prisma_1.default.customers.create({
            data: {
                name,
                phone,
                email,
                address
            }
        });
        res.json({
            message: "Add customer success!",
            results: customer
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
});
exports.customerRouter.get("/", async (req, res) => {
    try {
        const customers = await prisma_1.default.customers.findMany();
        res.status(200).json({
            message: "Get all customers success!",
            results: customers
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
});
exports.customerRouter.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const customer = await prisma_1.default.customers.findUnique({
            where: {
                id: Number(id)
            }
        });
        res.status(200).json({
            message: "Get customer detail success!",
            results: customer
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
});
exports.customerRouter.patch("/:id", async (req, res) => {
    try {
        const { name, phone, email, address } = req.body;
        const { id } = req.params;
        const customer = await prisma_1.default.customers.update({
            where: {
                id: Number(id)
            },
            data: {
                name,
                phone,
                email,
                address
            }
        });
        res.status(200).json({
            message: "Edit data customer success!",
            results: customer
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
});
exports.customerRouter.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const customer = await prisma_1.default.customers.delete({
            where: {
                id: Number(id)
            }
        });
        res.status(200).json({
            message: "Delete data customer success!",
            results: customer
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
});
