import mongoose from "mongoose"



const productSchema= new mongoose.Schema({
    id: String,
    url: String,
    detailurl: String,
    title: Object,
    price: Object,
    description: String,
    discount: String,
    tagline: String
})
 const product=mongoose.model('product',productSchema);

 export default product;