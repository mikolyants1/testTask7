import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

export const User = new GraphQLObjectType({
    name:"User",
    fields:()=>({
      id:{
        type:new GraphQLNonNull(GraphQLString)
      },
      name:{
        type:new GraphQLNonNull(GraphQLString)
      },
      username:{
        type:new GraphQLNonNull(GraphQLString)
      },
      email:{
        type:new GraphQLNonNull(GraphQLString)
      }
    })
})