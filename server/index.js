require('dotenv').config();

const express=require('express'),
      controller=require('./controller')
      massive=require('massive'),
      app=express();

const {SERVER_PORT, CONNECTION_STRING} = process.env;

app.use(express.json());

massive(CONNECTION_STRING).then(db=>{
    app.set('db', db);
    console.log('db connected')
})

app.get('/api/inventory',controller.getProducts)

const port=4000
app.listen(port, () => console.log(`server running on ${port}`))