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
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id)

        if (!user) {
            res.status(404).json({
                message: "Usuário não encontrado"
            })
            return
        }

        res.status(200).json({
            message: "Usuário encontrado",
            user
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
})

// deletar usuários
router.delete("/:id", async (req, res) => { //“se eu quero algo variável na URL, uso :algumaCoisa”
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        
        if (!user) {
            res.status(404).json({
                message: "Usuario não encontrado"
            })
            return;
        }
        res.status(200).json({
            message: "Usuário deletado"
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
})

// atualizar usuário
router.put("/:id", async (req, res) => {
    try {

        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );

        if (!user) {
            res.status(404).json({
                message: "Usuario não encontrado"
            })
            return;
        }

        res.status(200).json({
            message: "usuario atualizado"
        })

    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
})

export default router