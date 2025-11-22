import mongoose from 'mongoose'

const {Schema,model} = mongoose
const productSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
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
    status: {
        type: Boolean,
        default: true
    },
    image: {
        type: String,
        default: ""
    }
})

const Product = model("Product",productSchema)

export default Product 