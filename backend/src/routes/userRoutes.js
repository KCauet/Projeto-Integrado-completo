import express from "express"
import User from "../models/User.js"

const router = express.Router() // Cria mini rotas separadas deixando a API modular

// criar usuario
router.post("/", async (req, res) => {
    try {
        const user = await User.create(req.body)

        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
})

// listar usuários
router.get("/", async (req, res) => {
    try {
        const users = await User.find()

        res.json(users)
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
})

export default router