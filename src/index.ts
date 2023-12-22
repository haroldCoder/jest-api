import app from "./app";

app.listen(process.env.PORT || 1000, ()=>{
    console.log(`Server on port ${process.env.PORT || 1000}`);
})