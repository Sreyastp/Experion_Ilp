const express = require('express');
const cors = require('cors');

const app = express();
const port = 3002;





let staffs = [
    {
      "id": "1",
      "email": "testuser1@gmail.com",
      "password": "testpassword1",
      "first_name": "FirstName 1",
      "last_name": "LastName 1",
      "mobile_no": "1111111111",
      "date_of_joining": "01-01-2021"
    },
    {
      "id": "2",
      "email": "testuser2@gmail.com",
      "password": "testpassword2",
      "first_name": "FirstName 2",
      "last_name": "LastName 2",
      "mobile_no": "2222222222",
      "date_of_joining": "02-02-2021"
    },
    {
      "id": "3",
      "email": "testuser3@gmail.com",
      "password": "testpassword3",
      "first_name": "FirstName 3",
      "last_name": "LastName 3",
      "mobile_no": "3333333333",
      "date_of_joining": "03-03-2021"
    }
  ];

    var allowCrossDomain = function(req, res, next){
        res.header('Access-Control-Allow-Origin', "*");
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    }
    
    app.use(cors());
    
    app.use(allowCrossDomain);
    
    app.use(express.urlencoded({ extended: false}));
    
    app.use(express.json());
    
    app.post('/staffs', (req, res) =>{
        const staff = req.body;
    
        staffs.push(staff);
    
        res.send('staff is added to the database');
    });
    
    app.get('/staffs', (req, res) =>{
        res.json(staffs);
    });
    
 

app.get('/staffs/:id', (req, res) => {

    const id = req.params.id;

    for(let staff of staffs){
    if(staff.id === id){
        res.json(staff);
        return;
    }

 
    
}


    res.status(404).send('staff not found');
    });
    
    app.put('/staffs/:id', (req, res) => {
    
     
        const id = req.params.id;
        const newstaff = req.body;
    
        
        for(let i = 0; i < staffs.length; i++){
            let staff = staffs[i];
    
            if(staff.id === id){
                staffs[i] = newstaff;
            }
        }
    
        
        res.send('staff is edited');
    
    })
    
    app.delete('/staffs/:id', (req, res) => {
       
        const id = req.params.id;
    
       
        staffs = staffs.filter(i => {
            if(i.id !== id){
                return true;
    
            }
    
            return false;
        });
    
        res.send('staff is deleted');
    })
    
    app.listen(port, () => console.log(`Hello World app listening om port ${port}!`));