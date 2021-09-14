import express from 'express'

let file = './index.ts'

let app = express()

app.use(express.json())


app.listen(3000, () => console.log(file, `Listening on port ${3000}`))