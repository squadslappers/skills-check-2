require('dotenv').config();

const express=require('express'),
      massive=require('massive'),
      controller=require('./controller');
      
const app = express();

const {SERVER_PORT, CONNECTION_STRING} = process.env;

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('DB connected')
})

app.get('/api/inventory',controller.getProducts)
app.post('/api/product',controller.addProduct)
app.delete('/api/inventory/:id',controller.deleteProduct)
app.put('/api/inventory/:id',)

app.listen(SERVER_PORT, () => console.log(`server running on ${SERVER_PORT}`))