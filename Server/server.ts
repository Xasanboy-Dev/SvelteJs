import express, { Request, Response } from "express"
import cors from "cors"
const server = express()
server.use(cors())
const PORT = 7070
import { pool } from "../config/db"
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
// 
server.get("/", async (req: Request, res: Response) => {
    try {
        const allUsers = (await pool.query(`SELECT * FROM users`)).rows
        res.status(200).json({ message: allUsers })
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
})
// 
server.post("/", async (req: Request, res: Response) => {
    try {
        const { name, lastname, email } = req.body
        await pool.query(`INSERT INTO users (name,lastname,email) VALUES ($1,$2,$3)`, [name, lastname, email])
        res.status(201).json({ message: "Your Data has Created" })
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
})
server.listen(PORT, () => {
    console.log(`Server: http://localhost:${PORT}`)
})