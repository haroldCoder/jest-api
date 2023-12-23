import app from "./app";
import ConnectMongoDB from "./connection/connectMongoDB";

var server = app.listen(process.env.PORT || 1000, async()=>{
    console.log(`Server on port ${process.env.PORT || 1000}`);
    const connectmongo = new ConnectMongoDB(process.env.MONGO_URI ?? "");
    await connectmongo.Connect();
})

module.exports = server;