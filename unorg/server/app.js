const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/item');

const appgraph = express();

//bind express with graphql
appgraph.use('/graphql',graphqlHTTP({
    // pass in a schema property
    schema,
    graphiql:true
}));

//test server
appgraph.listen(4000, ()=>{
    console.log('now listening for requests on port 4000');
});