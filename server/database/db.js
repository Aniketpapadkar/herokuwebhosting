import mongoose from "mongoose";



const URL = 'mongodb+srv://Aniketpapadkar:Badshah1@cluster0.hz1kv.mongodb.net/PROJECT0?retryWrites=true&w=majority'
const Connection = async(username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.hz1kv.mongodb.net/PROJECT0?retryWrites=true&w=majority`
    try{
     await mongoose.connect(URL,{});
     console.log('Database connected successfully');
    }catch(error){
        console.log('Error:',error.message);
    }
}
export default  Connection;