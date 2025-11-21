// responsable de quitar las variables de la petición y preparar la salida

import { productsService } from "../services/productsService.js"

const ps = new productsService();

export const getOneProduct = async (req, res)=>{
    try {
        // extraer del req las variables
        const { id } = req.params
        // llamar al service que resuelve la logica
        const producto = await ps.getOne(id)
        // devolver resultado
        res.send(producto)
    } catch (error) {
        // devolver error 500: error de servidor
        res.send(500)
    }

};

export const getAllProducts = async (req, res)=>{
    try {
        const productos = await ps.getAll()
        res.send(productos)
    } catch (error) {}
};

export const createProduct = async (req, res)=>{
    const {name, price} = req.body
    
    const productoCreado = await ps.create(name,price)
    res.send(productoCreado)
};

export const updateProduct = async (req, res)=>{
    const {id} = req.params
    const {name,price,status} = req.body

    const producto = {
        name,price,status,id:Number(id)
    }

    const productoActualizado = await ps.update(producto)
    res.send(productoActualizado)
};

export const updatePartialProduct = (req, res)=>{};  // POR QUÉ NO ME DEJA BORRAR ESTO¿¿¿¿ está cursed

export const deleteProduct = async (req, res)=>{
    try {
        const { id } = req.params
        const productoEliminado = await ps.deleteLogicoProd(Number(id))
        res.send(productoEliminado)
    } catch (error) {
        
    } 

}
