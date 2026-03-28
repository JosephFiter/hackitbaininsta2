const { Router } = require('express')

const router = Router()

const products = [
  { id: 1, name: 'Arroz', description: 'Arroz largo fino', price: 1.20, unit: 'kg', category: 'secos', available: true },
  { id: 2, name: 'Aceite de girasol', description: 'Botella 900ml', price: 2.50, unit: 'unidad', category: 'secos', available: true },
  { id: 3, name: 'Leche entera', description: 'Caja 1 litro', price: 1.10, unit: 'litro', category: 'lacteos', available: true },
  { id: 4, name: 'Yerba mate', description: 'Paquete 500g', price: 3.00, unit: 'unidad', category: 'infusiones', available: true },
  { id: 5, name: 'Detergente', description: 'Botella 750ml', price: 1.80, unit: 'unidad', category: 'limpieza', available: false },
]

// GET /api/products
// Query params: category, available (true/false)
router.get('/', (req, res) => {
  const { category, available } = req.query

  let result = products

  if (category) {
    result = result.filter(p => p.category === category)
  }

  if (available !== undefined) {
    result = result.filter(p => p.available === (available === 'true'))
  }

  res.json(result)
})

module.exports = router
