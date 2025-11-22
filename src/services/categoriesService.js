import Category from "../models/categoriesModel.js";

export class categoriesService{

    async getOne(id){
        const category = await Category.findOne({id:Number(id)})
        return category
    }

    async getAll(){
        const categories = await Category.find()
        return categories
    }

    async create({ name, description }) {
        const idGenerado = Math.ceil(Math.random() * 1000000 + 1);

        const categoria = {
            id: idGenerado,
            name,
            description,
            status: true,
        };
        const categoriaCreada = await Category.create(categoria)
        return categoriaCreada
    }

    async update(categoria){
        const categoriaActualizada = await Category.updateOne({id:categoria.id},{...categoria})
        return categoriaActualizada
    }


    async deleteLogicoCat(id){
        //  borrado logico
        const categoriaEliminada = await Category.updateOne({id:id},{status:false})
        return categoriaEliminada

    }

    // async deleteFisicoCat(id){
    //     //   borrado fisico
    //     const categoriaEliminada = await Category.deleteOne({id:id})
    //     return categoriaEliminada
    // }

} 