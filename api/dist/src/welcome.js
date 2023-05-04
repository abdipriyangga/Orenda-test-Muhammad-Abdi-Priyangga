"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const welcomeRouter = express_1.default.Router();
welcomeRouter.get("/", async (req, res) => {
    try {
        res.json({
            message: "Selamat datang"
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
});
module.exports = welcomeRouter;
