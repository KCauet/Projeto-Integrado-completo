import app from "./app.js"
import dotenv from "dotenv"
import connectDB from "./database/connect.js"

dotenv.config()

connectDB()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})