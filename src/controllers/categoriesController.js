// responsable de quitar las variables de la petición y preparar la salida

import { categoriesService } from "../services/categoriesService.js"

const cs = new categoriesService();

export const getOneCategory = async (req, res)=>{
    try {
        // extraer del req las variables
        const { id } = req.params
        // llamar al service que resuelve la logica
        const category = await cs.getOne(id)
        // devolver resultado
        res.send(category)
    } catch (error) {
        // devolver error 500: error de servidor
        res.status(500).send({ error: "Error al buscar categoría" });
    }

};

export const getAllCategories = async (req, res) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;

        const result = await cs.getAll(page, limit);
        res.json(result);

    } catch (error) {
        res.status(500).json({ message: "Error al obtener categorías" });
    }
};

export const createCategory = async (req, res) => {
    try {
        const { name, description, status } = req.body;

        const categoriaCreada = await cs.create({ name, description, status});

        res.send(categoriaCreada);
    } catch (error) {
        res.status(500).send({ error: "Error al crear categoría" });
    }
};

export const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, status } = req.body;

        const category = {id: Number(id),name,description,status};

        const categoriaActualizada = await cs.update(category);
        res.send(categoriaActualizada);
    } catch (error) {
        res.status(500).send({ error: "Error al actualizar categoría" });
    }
};

export const deleteCategory = async (req, res)=>{
    try {
        const { id } = req.params
        const categoriaEliminada = await cs.deleteLogicoCat(Number(id))
        res.send(categoriaEliminada)
    } catch (error) {
        res.status(500).send({ error: "Error al eliminar categoría" });
    } 

}
