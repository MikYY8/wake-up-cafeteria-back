import mongoose from 'mongoose'

const {Schema,model} = mongoose
const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        default: ""
    },
    image: {
        type: String,
        default: ""
    },
        status: {
        type: Boolean,
        default: true
    },
        id: {
        type: Number,
        required: true,
        unique: true
    }
})

const Product = model("Product",productSchema)

export default Product 