"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersRouter = void 0;
const express_1 = __importDefault(require("express"));
const prisma_1 = __importDefault(require("./prisma"));
exports.ordersRouter = express_1.default.Router();
exports.ordersRouter.post("/", async (req, res) => {
    try {
        const { discount, customerId, productId } = req.body;
        const odNumber = `ORD-${new Date().getTime()}`;
        // If customer want order multiple product
        if (productId.length > 1) {
            const connectProducts = productId.map((x) => {
                return {
                    id: Number(x)
                };
            });
            const product = productId.map((x) => {
                return Number(x);
            });
            const fixDisc = discount / 100;
            const selectedProductPrice = await prisma_1.default.products.findMany({
                where: {
                    id: {
                        in: product
                    }
                },
                select: {
                    price: true
                }
            });
            const prices = selectedProductPrice.map((x) => {
                return x.price;
            });
            const total = prices.reduce((a, b) => a + b, 0);
            if (discount > 0) {
                const priceAfterDisc = total * fixDisc;
                const totalPriceAfterDisc = total - priceAfterDisc;
                const ordersByCustomer = await prisma_1.default.orders.create({
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
                });
                res.json({
                    message: "Create order by customer success!",
                    results: ordersByCustomer
                });
            }
            else {
                const ordersByCustomer = await prisma_1.default.orders.create({
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
                });
                res.json({
                    message: "Create order by customer success!",
                    results: ordersByCustomer
                });
            }
        }
        else {
            // Condition customer just oorder single product
            const fixDisc = discount / 100;
            const selectedProductPrice = await prisma_1.default.products.findMany({
                where: {
                    id: Number(productId)
                },
                select: {
                    price: true
                }
            });
            const prices = selectedProductPrice.map((x) => {
                return x.price;
            });
            const total = prices.reduce((a, b) => a + b, 0);
            // Condition if customer get discount
            if (discount > 0) {
                const priceAfterDisc = total * fixDisc;
                const totalPriceAfterDisc = total - priceAfterDisc;
                const ordersByCustomer = await prisma_1.default.orders.create({
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
                });
                res.json({
                    message: "Create order by customer success!",
                    results: ordersByCustomer
                });
            }
            else {
                // condition if customer dont get discount
                const ordersByCustomer = await prisma_1.default.orders.create({
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
                });
                res.json({
                    message: "Create order by customer success!",
                    results: ordersByCustomer
                });
            }
        }
    }
    catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
});
exports.ordersRouter.get("/", async (req, res) => {
    try {
        const orders = await prisma_1.default.orders.findMany();
        res.status(200).json({
            message: "Get all data orders customer success!",
            results: orders
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
});
exports.ordersRouter.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const order = await prisma_1.default.orders.findUnique({
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
        });
        res.status(200).json({
            message: "Get data detail order customer success!",
            results: order
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
});
