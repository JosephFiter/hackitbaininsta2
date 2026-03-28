import 'dotenv/config'
import express from 'express'
import productsRouter from './routes/products.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.use('/api/products', productsRouter)

app.listen(PORT, () => {
  console.log(`API corriendo en http://localhost:${PORT}`)
})
