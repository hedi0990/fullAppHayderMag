const express = require("express");
const cors = require('cors');
require('dotenv').config({ path: './config/.env' });
const app = express();
// const connectDB = require('./connectDb');

// mongodb
const URL="mongodb+srv://hedi90benhmida:mXJi1huYP2TGtOtb@cluster0.uoxi7.mongodb.net/hayderMag?retryWrites=true&w=majority&appName=Cluster0"
console.log('URL1=' ,URL)

connectDB = async () => {
    try {
        console.log('URL=' ,URL)
        await mongoose.connect(URL)
        console.log(`data base is connected`)
    } catch (error) {
        console.log(`dataBase can not be connected\nError=${error.message}`)
    }
}
connectDB()

//MIDDLEWARE
app.use(express.json());
app.use(cors());

//ROUTES
// app.use("/api/administrator", require("./routes/administrator.routes"));
// app.use("/api/receptionist", require("./routes/receptionist.routes"));
// app.use("/api", require("./routes/allEmployee.routes"));

//PORT
const port = process.env.SERVER_PORT || 6006;
//STARTING A SERVER
console.clear();
app.listen(port, (error) => {
    error ?
        console.log(`Error in the server.\nerror: ${error.message}`)
        :
        console.log(`Server is running.\nport: ${port}`)
})