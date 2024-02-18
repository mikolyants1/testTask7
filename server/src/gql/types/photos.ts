import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

export const Photo = new GraphQLObjectType({
    name:"Photo",
    fields:()=>({
      id:{
        type:new GraphQLNonNull(GraphQLString)
      },
      albumId:{
        type:new GraphQLNonNull(GraphQLString)
      },
      title:{
        type:new GraphQLNonNull(GraphQLString)
      },
      url:{
        type:new GraphQLNonNull(GraphQLString)
      }
   })
})