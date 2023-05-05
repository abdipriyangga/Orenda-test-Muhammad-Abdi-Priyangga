import express from "express"
import prisma from "./prisma"

export const customerRouter = express.Router()
customerRouter.post("/", async (req, res) => {
    try {
        const { name, phone, email, address } = req.body;
        const customer = await prisma.customers.create({
            data: {
                name,
                phone,
                email,
                address
            }
        })
        res.json({
            message: "Add customer success!",
            results: customer
        })
    } catch (error: any) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
})
customerRouter.get("/", async (req, res) => {
    try {
        const customers = await prisma.customers.findMany()
        res.status(200).json({
            message: "Get all customers success!",
            results: customers
        })
    } catch (error: any) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
})

customerRouter.get("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const customer = await prisma.customers.findUnique({
            where: {
                id: Number(id)
            }
        })
        res.status(200).json({
            message: "Get customer detail success!",
            results: customer
        })
    } catch (error: any) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
})

customerRouter.patch("/:id", async (req, res) => {
    try {
        const { name, phone, email, address } = req.body;
        const { id } = req.params;
        const customer = await prisma.customers.update({
            where: {
                id: Number(id)
            },
            data: {
                name,
                phone,
                email,
                address
            }
        })
        res.status(200).json({
            message: "Edit data customer success!",
            results: customer
        })
    } catch (error: any) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
})

customerRouter.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const customer = await prisma.customers.delete({
            where: {
                id: Number(id)
            }
        })
        res.status(200).json({
            message: "Delete data customer success!",
            results: customer
        })
    } catch (error: any) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
})