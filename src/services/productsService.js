import Product from "../models/productsModel.js";

export class productsService{

    async getOne(id){
        const producto = await Product.findOne({id:Number(id)})
        return producto
    }

    async getAll(page = 1, limit = 10) {
        const skip = (page - 1) * limit;

        const [total, products] = await Promise.all([
            Product.countDocuments(),
            Product.find().skip(skip).limit(limit)
        ]);

        return {
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
            data: products
        };
    }

    async create(name,price){

        const idGenerado = Math.ceil((Math.random()*1000000)+1)

        const producto = {
            name,
            price,
            status:true,
            id:idGenerado
        }
        const productoCreado = await Product.create(producto)
        return productoCreado
    }

    async update(producto){
        const productoActualizado = await Product.updateOne({id:producto.id},{...producto})
        return productoActualizado
    }

    async deleteLogicoProd(id){
        //  borrado logico
        const productoEliminado = await Product.updateOne({id:id},{status:false})
        return productoEliminado

    }

    // async deleteFisicoProd(id){
    //     //   borrado fisico
    //     const productoEliminado = await Product.deleteOne({id:id})
    //     return productoEliminado
    // }

} 