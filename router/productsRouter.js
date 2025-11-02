// responsable del ruteo (funciones del controller) + ejecutar middlewares

import { Router } from "express";
import { getOneProduct, getAllProducts, createProduct, updateProduct, updatePartialProduct, deleteProduct } from "../controllers/productsController.js";

const productsRouter = Router()

// CRUD (tiene que tener todos los metodos)

//GET con un :id que va a traer un elemento
productsRouter.get("/:id", getOneProduct)


//GET con un :id que va a traer todos los elementos (despues lo vamos a controlar)
productsRouter.get("/", getAllProducts)


//POST datos en el body: crea un elemento
productsRouter.post("/", createProduct)


//PUT (editar) datos en el body + id para saber cuál editar: actualiza un elemento especifico
productsRouter.put("/:id", updateProduct)


//PATCH datos en el body + id: actualiza un elemento especifico parcialmente
productsRouter.patch("/:id", updatePartialProduct)


//DELETE con un id: eliminar un elemento de la base de datos (logica (cambio de estado) / fisica (eliminacion real de la BBDD))
productsRouter.delete("/:id", deleteProduct)


export default productsRouter