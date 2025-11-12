import express from 'express'
import env from 'dotenv'
import mongoose from 'mongoose'
import productsRouter from "./router/productsRouter.js"
import categoriesRouter from "./router/categoriesRouter.js"

env.config()

const PORT = process.env.PORT

const app = express()

app.use(express.json())

app.use("/api/products", productsRouter)
app.use("/api/category", categoriesRouter)

mongoose.connect(process.env.MONGOURL).then(()=>{
  console.log("Base de datos conectada a " + process.env.MONGOURL)
}).catch((error)=>{
  console.log(error)
})

app.listen(PORT, () => 
  console.log(`Server levantado en http://localhost:${PORT}`)
)