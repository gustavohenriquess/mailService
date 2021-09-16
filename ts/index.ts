require('dotenv').config()
import express from 'express'

let file = './index.ts'
let app = express()

app.use(express.json())

app.listen(process.env.SRV_PORT, () => console.log(file, `Listening on port ${process.env.SRV_PORT}`))