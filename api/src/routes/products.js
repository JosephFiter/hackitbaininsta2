import { Router } from 'express'
import supabase from '../../supabase.js'

const router = Router()

// GET /api/products
// Query params: category, available (true/false)
router.get('/', async (req, res) => {
  const { category, available } = req.query

  let query = supabase
    .from('products')
    .select('*')
    .order('name', { ascending: true })

  if (category) {
    query = query.eq('category', category)
  }

  if (available !== undefined) {
    query = query.eq('available', available === 'true')
  }

  const { data, error } = await query

  if (error) {
    return res.status(500).json({ error: error.message })
  }

  res.json(data)
})

export default router
