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
