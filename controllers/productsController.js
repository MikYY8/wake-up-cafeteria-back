// responsable de quitar las variables de la petición y preparar la salida

import { productsService } from "../services/productsService.js"

const ps = new productsService();

export const getOneProduct = (req, res)=>{
    try {
        // extraer del req las variables
        const { id } = req.params
        // llamar al service que resuelve la logica
        const producto = ps.getOne(id)
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
    const producto = {
        name,
        price,
        status:true
    }
    const productoCreado = await ps.create(producto)
    res.send(productoCreado)
};

export const updateProduct = (req, res)=>{
    const {id} = req.params
    const {name,price,status} = req.body

    const producto = {
        name,price,status,id
    }

    const productoActualizado = ps.update(producto)
    res.send(productoActualizado)
};

export const updatePartialProduct = (req, res)=>{
    const {id} = req.params
    const {name,price,status} = req.body

    const producto = { id: Number(id) };
    if (name !== undefined) producto.name = name;
    if (price !== undefined) producto.price = price;
    if (status !== undefined) producto.status = status;

    const productoActualizado = ps.updatePartial(producto)
    res.send(productoActualizado)

};

export const deleteProduct = (req, res)=>{
    try {
        const { id } = req.params
        const productoEliminado = ps.deleteProd(Number(id))
        res.send(productoEliminado)
    } catch (error) {
        
    }

}