import express from 'express';
//import productsRouter from "./src/routes/products"
const app = express();
//const productsRouter = productsRouter()
const port = 3000;
app.use(express.json())
app.get('/', (_req, res) => {
  res.json({ status: 'HOLA' })
})
app.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})

//app.use('/api/products', productsRouter)

// Local dev
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;

