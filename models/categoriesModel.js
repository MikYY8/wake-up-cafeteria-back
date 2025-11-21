import mongoose from 'mongoose'

const {Schema,model} = mongoose
const categorySchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ""
    },
    status: {
        type: Boolean,
        default: true
    }
})

const Category = model("Category",categorySchema)

export default Category 