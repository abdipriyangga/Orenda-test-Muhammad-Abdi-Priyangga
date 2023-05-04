import express from "express"
import prisma from "./prisma"

export const productsRouter = express.Router()
productsRouter.post("/", async (req, res) => {
    try {
        const { name, unit, price } = req.body;
        const products = await prisma.products.create({
            data: {
                name,
                unit: Number(unit),
                price: Number(price)
            }
        })
        res.json({
            message: "Create products success!",
            results: products
        })
    } catch (error: any) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
})