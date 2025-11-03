import express from 'express'
import productsRouter from "./router/productsRouter.js"
import categoriesRouter from "./router/categoriesRouter.js"

const PORT = 3000

const app = express()

app.use(express.json())

app.use("/api/products", productsRouter)
app.use("/api/category", categoriesRouter)


app.listen(PORT, () => 
  console.log(`Server levantado en http://localhost:${PORT}`)
)