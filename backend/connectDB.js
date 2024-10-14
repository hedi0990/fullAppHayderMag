const mongoose = require('mongoose');


module.exports = connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://hedi90benhmida:mXJi1huYP2TGtOtb@cluster0.uoxi7.mongodb.net/hayderMag?retryWrites=true&w=majority&appName=Cluster0")
        console.log(`data base is connected`)
    } catch (error) {
        console.log(`dataBase can not be connected\nError=${error.message}`)
    }
}