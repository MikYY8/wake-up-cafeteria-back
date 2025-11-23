import { Router } from "express";
import { getOneCategory, getAllCategories, createCategory, updateCategory, deleteCategory } from "../controllers/categoriesController.js";
import { idValidation, categoryCreateValidation, categoryUpdateValidation } from "../validations/categoriesValidation.js"
import { validationMiddleware } from "../middlewares/validationMiddleware.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { authRoles } from "../middlewares/authRolesMiddleware.js";

const categoriesRouter = Router()

// CRUD (tiene que tener todos los metodos)

//GET con un :id que va a traer un elemento
categoriesRouter.get("/:id", idValidation, validationMiddleware, getOneCategory)


//GET con un :id que va a traer todos los elementos (despues lo vamos a controlar)
categoriesRouter.get("/", getAllCategories)  


//POST datos en el body: crea un elemento
categoriesRouter.post("/", categoryCreateValidation, authMiddleware, authRoles(["admin"]), validationMiddleware, createCategory)


//PUT (editar) datos en el body + id para saber cuál editar: actualiza un elemento especifico
categoriesRouter.put("/:id", categoryUpdateValidation, authMiddleware, authRoles(["admin"]), validationMiddleware, updateCategory)


//DELETE con un id: eliminar un elemento de la base de datos (logica (cambio de estado) / fisica (eliminacion real de la BBDD))
categoriesRouter.delete("/:id", idValidation, authMiddleware, authRoles(["admin"]), validationMiddleware, deleteCategory)


export default categoriesRouter