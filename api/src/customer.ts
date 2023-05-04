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
