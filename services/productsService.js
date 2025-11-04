import Product from "../models/productsModel.js";

export class productsService{

    async getOne(id){
        const producto = await Product.findOne({id:Number(id)})
        return producto
    }

    async getAll(){
        const products = await Product.find()
        return products
    }

    async create(name,price){

        const idGenerado = Math.ceil((Math.random()*1000000)+1)

        const producto = {
            name,
            price,
            statur:true,
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

    async deleteFisicoProd(id){
        //   borrado fisico
        const productoEliminado = await Product.deleteOne({id:id})
        return productoEliminado
    }

} 