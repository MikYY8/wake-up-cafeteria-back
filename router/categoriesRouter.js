import { Router } from "express";

const categoriesRouter = Router()

// CRUD (tiene que tener todos los metodos)

//GET con un :id que va a traer un elemento
categoriesRouter.get("/:id", (req, res)=>{
    // llamar al controller

})


//GET con un :id que va a traer todos los elementos (despues lo vamos a controlar)
categoriesRouter.get("/", (req, res)=>{
    // llamar al controller
    
})


//POST datos en el body: crea un elemento
categoriesRouter.post("/", (req, res)=>{
    // llamar al controller
    
})


//PUT (editar) datos en el body + id para saber cuál editar: actualiza un elemento especifico
categoriesRouter.put("/:id", (req, res)=>{
    // llamar al controller
    
})


//PATCH datos en el body + id: actualiza un elemento especifico parcialmente
categoriesRouter.patch("/:id", (req, res)=>{
    // llamar al controller
    
})


//DELETE con un id: eliminar un elemento de la base de datos (logica (cambio de estado) / fisica (eliminacion real de la BBDD))
categoriesRouter.delete("/:id", (req, res)=>{
    // llamar al controller
    
})



export default categoriesRouter