
//book ---table-- classs
//declare graphql
const graphql = require('graphql');
const _=require('lodash');

//ObjectType, string, scehema
const {GraphQLObjectType,GraphQLString,GraphQLSchema}=graphql;


//object type
const Booktype = new GraphQLObjectType({
    //name of the object and fieleds
    name:'item',

        fields: ()=>({
        item_id:{type:GraphQLString},
        Category_id:{type:GraphQLString},
        Item_Name:{type:GraphQLString},
        Size_id:{type:GraphQLString},
        Style:{type:GraphQLString},
        Share:{type:GraphQLString},
        Gender:{type:GraphQLString},
        Price:{type:GraphQLString}

        })
});

//dummy data
var books=[
    {item_id:'1', Category_id:'100' , Item_Name: 'Shirt',Size_id:'xl',Style:'nice',Share:'90',Gender:'m',Price:'1000'},
    {item_id:'2', Category_id:'101' , Item_Name: 'balaclava',Size_id:'x',Style:'fit',Share:'99',Gender:'f',Price:'999'},
    {item_id:'3', Category_id:'102' , Item_Name: 'jeans',Size_id:'xxl',Style:'good',Share:'90',Gender:'m',Price:'999'},
    
]

//rootquery
const RootQuery = new GraphQLObjectType({

    //name and parameteres
    name: 'RootQueryType',
    fields:{

        item:{
            type: Booktype,
            args:{
                item_id:{type: GraphQLString}
            },
            resolve(parent,args){
                //code to get from db // other resource
              return  _.find(books,{item_id:args.item_id});
            }
        }

    }


})

//exports
module.exports= new GraphQLSchema({
    query: RootQuery
});




