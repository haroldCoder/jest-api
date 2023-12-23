import mongoose from "mongoose";

class ConnectMongoDB{
    mongouri: string;
    connection: mongoose.Connection = mongoose.connection;

    constructor(mongouri: string){
        this.mongouri = mongouri;
    }

    Connect = async() =>{
        await mongoose.connect(this.mongouri,{})

        this.connection.once('open', ()=>{
            console.log('db connected');
        })
    }
}

export default ConnectMongoDB;