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

export const getAllProducts = async (req, res) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;

        const result = await ps.getAll(page, limit);
        res.json(result);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al obtener productos" });
    }
};

export const createProduct = async (req, res) => {
    try {
        const { name, price, description, image } = req.body;

        const productoCreado = await ps.create({name,price,description,image,});

        res.send(productoCreado);
    } catch (error) {
        res.status(500).send({ error: "Error al crear producto" });
        console.log(error)
    }
};

export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, description, image, status } = req.body;

        const producto = {id: Number(id),name,price,description,image,status};

        const productoActualizado = await ps.update(producto);
        res.send(productoActualizado);
    } catch (error) {
        res.status(500).send({ error: "Error al actualizar producto" });
    }
};

export const updatePartialProduct = (req, res)=>{};  // POR QUÉ NO ME DEJA BORRAR ESTO¿¿¿¿ está cursed

export const deleteProduct = async (req, res)=>{
    try {
        const { id } = req.params
        const productoEliminado = await ps.deleteLogicoProd(Number(id))
        res.send(productoEliminado)
    } catch (error) {
        res.status(500).send({ error: "Error al actualizar producto" });
    } 

}
