import express from "express"
import prisma from "./prisma"

export const ordersRouter = express.Router()
ordersRouter.post("/", async (req, res) => {
    try {
        const { discount, customerId, productId } = req.body;
        const odNumber = `ORD-${new Date().getTime()}`;
        // If customer want order multiple product
        if (productId.length > 1) {
            const connectProducts = productId.map((x: number) => {
                return {
                    id: Number(x)
                }
            })
            const product = productId.map((x: number) => {
                return Number(x)
            })
            const fixDisc = discount / 100;
            const selectedProductPrice = await prisma.products.findMany({
                where: {
                    id: {
                        in: product
                    }
                },
                select: {
                    price: true
                }
            })
            const prices = selectedProductPrice.map((x) => {
                return x.price
            })
            const total = prices.reduce((a: any, b: any) => a + b, 0);
            if (discount > 0) {
                const priceAfterDisc = total * fixDisc;
                const totalPriceAfterDisc = total - priceAfterDisc
                const ordersByCustomer = await prisma.orders.create({
                    data: {
                        orderNumber: odNumber,
                        customer: {
                            connect: {
                                id: Number(customerId)
                            }
                        },
                        products: {
                            connect: connectProducts
                        },
                        discount: fixDisc,
                        total: totalPriceAfterDisc
                    }
                })
                res.json({
                    message: "Create order by customer success!",
                    results: ordersByCustomer
                })
            } else {
                const ordersByCustomer = await prisma.orders.create({
                    data: {
                        orderNumber: odNumber,
                        customer: {
                            connect: {
                                id: Number(customerId)
                            }
                        },
                        products: {
                            connect: connectProducts
                        },
                        discount: 0,
                        total: total
                    }
                })
                res.json({
                    message: "Create order by customer success!",
                    results: ordersByCustomer
                })
            }
        } else {
            // Condition customer just oorder single product
            const fixDisc = discount / 100;
            const selectedProductPrice = await prisma.products.findMany({
                where: {
                    id: Number(productId)
                },
                select: {
                    price: true
                }
            })
            const prices = selectedProductPrice.map((x) => {
                return x.price
            })
            const total = prices.reduce((a: any, b: any) => a + b, 0);
            // Condition if customer get discount
            if (discount > 0) {
                const priceAfterDisc = total * fixDisc;
                const totalPriceAfterDisc = total - priceAfterDisc
                const ordersByCustomer = await prisma.orders.create({
                    data: {
                        orderNumber: odNumber,
                        customer: {
                            connect: {
                                id: Number(customerId)
                            }
                        },
                        products: {
                            connect: {
                                id: Number(productId)
                            }
                        },
                        discount: fixDisc,
                        total: totalPriceAfterDisc
                    }
                })
                res.json({
                    message: "Create order by customer success!",
                    results: ordersByCustomer
                })
            } else {
                // condition if customer dont get discount
                const ordersByCustomer = await prisma.orders.create({
                    data: {
                        orderNumber: odNumber,
                        customer: {
                            connect: {
                                id: Number(customerId)
                            }
                        },
                        products: {
                            connect: {
                                id: Number(productId)
                            }
                        },
                        discount: 0,
                        total: total
                    }
                })
                res.json({
                    message: "Create order by customer success!",
                    results: ordersByCustomer
                })
            }
        }

    } catch (error: any) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
})
ordersRouter.get("/", async (req, res) => {
    try {
        const orders = await prisma.orders.findMany()
        res.status(200).json({
            message: "Get all data orders customer success!",
            results: orders
        })
    } catch (error: any) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
})

ordersRouter.get("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const order = await prisma.orders.findUnique({
            where: {
                id: Number(id)
            },
            select: {
                id: true,
                orderNumber: true,
                customer: {
                    select: {
                        name: true
                    }
                },
                products: {
                    select: {
                        name: true,
                        price: true
                    }
                },
                discount: true,
                total: true
            }
        })
        res.status(200).json({
            message: "Get data detail order customer success!",
            results: order
        })
    } catch (error: any) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
})