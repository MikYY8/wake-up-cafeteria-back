// responsable del ruteo (funciones del controller) + ejecutar middlewares

import { Router } from "express";
import { param } from "express-validator";
import { getOneProduct, getAllProducts, createProduct, updateProduct, deleteProduct } from "../controllers/productsController.js";
import { idValidation, productCreateValidation, productUpdateValidation } from "../validations/productsValidation.js"
import { validationMiddleware } from "../middlewares/validationMiddleware.js";

const productsRouter = Router()

// CRUD (tiene que tener todos los metodos)

//GET con un :id que va a traer un elemento
productsRouter.get("/:id", idValidation, validationMiddleware, getOneProduct)


//GET con un :id que va a traer todos los elementos
productsRouter.get("/", productValidation, getAllProducts)


//POST datos en el body: crea un elemento
productsRouter.post("/", productCreateValidation, validationMiddleware, createProduct)


//PUT (editar) datos en el body + id para saber cuál editar: actualiza un elemento especifico
productsRouter.put("/:id", productUpdateValidation, validationMiddleware, updateProduct)


//DELETE con un id: eliminar un elemento de la base de datos (logica (cambio de estado) / fisica (eliminacion real de la BBDD))
productsRouter.delete("/:id", idValidation, validationMiddleware, deleteProduct)


export default productsRouter