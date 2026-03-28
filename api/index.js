const express = require('express')
const productsRouter = require('./src/routes/products')

const app = express()

app.use(express.json())

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.use('/api/products', productsRouter)

// Local dev
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000
  app.listen(PORT, () => console.log(`API corriendo en http://localhost:${PORT}`))
}

module.exports = app
