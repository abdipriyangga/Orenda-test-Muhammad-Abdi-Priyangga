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
productsRouter.get("/", async (req, res) => {
    try {
        const products = await prisma.products.findMany()
        res.status(200).json({
            message: "Get all products success!",
            results: products
        })
    } catch (error: any) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
})

productsRouter.get("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const products = await prisma.products.findUnique({
            where: {
                id: Number(id)
            }
        })
        res.status(200).json({
            message: "Get product detail success!",
            results: products
        })
    } catch (error: any) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
})

productsRouter.patch("/:id", async (req, res) => {
    try {
        const { name, unit, price } = req.body;
        const { id } = req.params;
        const product = await prisma.products.update({
            where: {
                id: Number(id)
            },
            data: {
                name,
                unit: Number(unit),
                price: Number(price)
            }
        })
        res.status(200).json({
            message: "Edit data product success!",
            results: product
        })
    } catch (error: any) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
})

productsRouter.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const product = await prisma.products.delete({
            where: {
                id: Number(id)
            }
        })
        res.status(200).json({
            message: "Delete data product success!",
            results: product
        })
    } catch (error: any) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
})