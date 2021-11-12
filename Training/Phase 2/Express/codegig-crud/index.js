const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

//Database Connection
const db = require('./config/database');
db.authenticate().then(() => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Error: ' + err);
})

const app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors("*"));

//Gig routes
app.use('/', require('./routes/routes'));

const PORT = process.env.PORT || 5000;
db.sync().then(() => {
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
}).catch(err => console.log("Error: " + err));



// //{
//     "title": "Looking for a MERN Stack Developer",
//     "technologies": "Mongo, Express, React and Node JS",
//     "description": "Should have strong programming knowledge",
//     "budget": "$40000",
//     "contact_email": "employer@IBM.com"
// }

// {
//     "title": "Looking for a MERN Stack Developer",
//     "technologies": "Mongo, Express, React and Node JS",
//     "description": "Should have strong programming knowledge",
//     "budget": "$12000",
//     "contact_email": "employer@IBM.com"
// }
// http://localhost:5000/gigs/2