//Usando Objeto express
const express=require("express")
//App de express
const app =express()
//Puerto en que veremos app :localhost:3000
const port =3000

//path inicial, responderá a la url localhost:3000
app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.get('/launchx',(req,res)=>{
    res.send("Bienvenidos a launchx")
})
//Regresando un objeto
app.get('/explorersInNode',(req,res)=>{
    const explorer={
        name:"José Ricardo",
        msg:"Hello"
    }
    res.send(explorer)
})
//Query Params
app.get('/explorers/:explorerName',(req,res)=>{
    res.send(req.params)
})
//Con esto inicializamos esta app
app.listen(port,()=>{
    console.log(`example app listening on port ${port}`)
})