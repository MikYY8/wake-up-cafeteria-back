import { Router } from "express";

const productsRouter = Router()

// CRUD (tiene que tener todos los metodos)

//GET con un :id que va a traer un elemento
productsRouter.get("/:id", (req, res)=>{
    // llamar al controller

})


//GET con un :id que va a traer todos los elementos (despues lo vamos a controlar)
productsRouter.get("/", (req, res)=>{
    // llamar al controller
    
})


//POST datos en el body: crea un elemento
productsRouter.post("/", (req, res)=>{
    // llamar al controller
    
})


//PUT (editar) datos en el body + id para saber cuál editar: actualiza un elemento especifico
productsRouter.put("/:id", (req, res)=>{
    // llamar al controller
    
})


//PATCH datos en el body + id: actualiza un elemento especifico parcialmente
productsRouter.patch("/:id", (req, res)=>{
    // llamar al controller
    
})


//DELETE con un id: eliminar un elemento de la base de datos (logica (cambio de estado) / fisica (eliminacion real de la BBDD))
productsRouter.delete("/:id", (req, res)=>{
    // llamar al controller
    
})



export default productsRouter