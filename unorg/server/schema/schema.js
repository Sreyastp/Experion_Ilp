
//book ---table-- classs
//declare graphql
const graphql = require('graphql');
const _=require('lodash');

//ObjectType, string, scehema
const {GraphQLObjectType,GraphQLString,GraphQLSchema}=graphql;


//object type
const Booktype = new GraphQLObjectType({
    //name of the object and fieleds
    name:'book',

        fields: ()=>({
        id:{type:GraphQLString},
        name:{type:GraphQLString},
        genre:{type:GraphQLString}
        })
});

//dummy data
var books=[
    {id:'1', name:'The power if positive' , genre: 'Fantasy'},
    {id:'2', name:'attittude is everything ' , genre: 'Self-Motivation'},
    {id:'3', name:'Fastrack' , genre: 'Automotive'}
]

//rootquery
const RootQuery = new GraphQLObjectType({

    //name and parameteres
    name: 'RootQueryType',
    fields:{

        book:{
            type: Booktype,
            args:{
                id:{type: GraphQLString}
            },
            resolve(parent,args){
                //code to get from db // other resource
              return  _.find(books,{id:args.id});
            }
        }

    }


})

//exports
module.exports= new GraphQLSchema({
    query: RootQuery
});


