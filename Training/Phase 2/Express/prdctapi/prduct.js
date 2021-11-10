const express=require('express')
const cors=require('cors')

const app=express()
const port=4000

let products = [{
   "prductd":"12333",
   "prodName":"biscut",
   "price":"222",
   "manfDate":"22-02-22",
   "expDate":"12-09-21"
},
{
    "prductd" :"123333233",
    "prodName":"milk",
    "price":"333",
    "manfDate":"21-02-22",
    "expDate":"12-12-21"
},
{
    "prductd":"12322233",
    "prodName":"curd",
    "price":"43",
    "manfDate":"22-02-22",
    "expDate":"12-05-21"
}];
var allowCrossDomain =function(req,res,next){
    res.header('Access-control-Allow-Orgin',"*")
    res.header('Access-control-Allow-Methods',"GET,PUT,POST,DELETE")
    res.header('Access-control-Allow-Header',"Control-Type")
    next()
}
app.use(cors());

app.use(allowCrossDomain);

app.use(express.urlencoded({ extended:false}));
app.use(express.json());

app.post('/product' , (req,res) => {
    const product = req.body;
    products.push(product);
    res.send('product is added to the database');
});


app.get('/product',(req,res)=>{
    res.json(products)
})

app.get('/product/:prductd',(req,res)=>{
    //reading prductd from the url
    const prductd = req.params.prductd;
// })
// searching products for the prductd
for(let product of products){
    if(product.prductd===prductd){
        res.json(product);
        return;
    }
}
//sending 404 when not found something is a good practice
res.status(404).send('product not found');
})

app.put('/product/:prductd', (req, res) => {

    //reading prductd from URL
    const prductd = req.params.prductd;
    const newproduct = req.body;

    //remove item from the products array
    for(let i = 0; i < products.length; i++){
        let product = products[i];

        if(product.prductd === prductd){
            products[i] = newproduct;
        }
    }

    //sending 404 when not found something is a good practice
    res.send('product is edited');

})


app.delete('/product/:prductd' ,(req,res)=>{
    const prductd =req.params.prductd;

    products = products.filter(i => {
        if(i.prductd !== prductd) {
            return true;
        }
        return false
    })
    res.send('product is deleted')
    

});



app.delete('/product',(req,res)=>{
    res.json(products)
})

app.listen(port,()=>console.log(`Hello world app listening on port ${port}`))                      