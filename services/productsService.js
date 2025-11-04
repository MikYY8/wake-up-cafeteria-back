import Product from "../models/productsModel.js";

export class productsService{

    getOne(id){
        // throw new Error("Error al buscar el producto")
        return this.productosMock.find((prod) => prod.id == id);
    }

    async getAll(){
        const products = await Product.find()
        return products
    }

    async create(producto){
        const productoCreado = await Product.create(producto)
        return productoCreado
    }

    update(producto){
        //  buscar elemento
        const index = this.productosMock.findIndex((prod)=>prod.id==producto.id)
        //  actualizar el elemento
        this.productosMock[index] = producto;
        //  devolver el elemento actualizado
        return this.productosMock[index]
    }

    updatePartial(producto){
        const index = this.productosMock.findIndex((prod)=>prod.id==producto.id)
        
        this.productosMock[index] = {
            ...this.productosMock[index],
            ...producto
        }
        
        return this.productosMock[index]
    }

    deleteProd(id){
        //  borrado logico
        this.productosMock[id-1].state=false;
        return this.productosMock[id-1]

        //   borrado fisico
        // this.productosMock = this.productosMock.filter((prod) => prod.id !== id);
        // return this.getOne(id)
    }

}
