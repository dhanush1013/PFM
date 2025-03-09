const mongoos = require('mongoose');
const connectDB = async()=>{
    try {
        await mongoos.connect(mongodb+srv://dhanush13:dhanush22@cluster0.wkqe0.mongodb.net/)
            console.log("Connected!!!")
    } catch (error) {
        console.log("Not Connected!!")
    }
}
module.exports = connectDB