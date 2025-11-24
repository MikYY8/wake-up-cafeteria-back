import express from 'express'
import env from 'dotenv'
import mongoose from 'mongoose'
import cors from "cors"

import productsRouter from "./src/router/productsRouter.js"
import categoriesRouter from "./src/router/categoriesRouter.js"
import userRouter from "./src/router/userRouter.js"

env.config()

const PORT = process.env.PORT

const app = express()

const corsOptions = {
  "origin": "http://localhost:5173", // agregar "https://midominio.com.ar" cuando tengamos
  "methods": "GET,POST,PUT,DELETE",
  "allowedHeaders": ["Content-Type", "Authorization", "x-refresh-token"]
}

app.use(express.json({ limit: '10mb' })) 
app.use(cors(corsOptions))

app.use("/api/products", productsRouter)
app.use("/api/category", categoriesRouter)
app.use("/api/users", userRouter)

// app.use((req,res)=>{
//     res.status(404).json({
//       mensage: "Route not found",
//       code: 404,
//       data: {},
//     });
// });

mongoose.connect(process.env.MONGOURL).then(()=>{
  console.log("Base de datos conectada a " + process.env.MONGOURL)
}).catch((error)=>{
  console.log(error)
})

app.listen(PORT, () => 
  console.log(`Server levantado en http://localhost:${PORT}`)
)