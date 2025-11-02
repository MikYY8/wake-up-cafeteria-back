export class productsService{
    productosMock = [
        { id: 1, name: "producto 1", price: 100, status:true },
        { id: 2, name: "producto 2", price: 200, status:true },
        { id: 3, name: "producto 3", price: 300, status:true },
    ];


    getOne(id){
        // throw new Error("Error al buscar el producto")
        return this.productosMock.find((prod) => prod.id == id);
    }

    getAll(){
        return this.productosMock
    }

    create(producto){
        const productoConId = {
            id:this.productosMock.length + 1,
            ...producto
        }
        this.productosMock.push(productoConId)
        console.log(this.productosMock)
        return producto
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

