import 'dotenv/config'
import express from 'express'
import productsRouter from './routes/products.js'

const app = express()

app.use(express.json())

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.use('/api/products', productsRouter)

export default app
