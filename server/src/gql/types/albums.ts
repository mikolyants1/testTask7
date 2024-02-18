import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

export const Album = new GraphQLObjectType({
    name:"Album",
    fields:()=>({
     albumId:{
       type:new GraphQLNonNull(GraphQLString)
     },
     userId:{
      type:new GraphQLNonNull(GraphQLString)
     },
     title:{
      type:new GraphQLNonNull(GraphQLString)
     }
  })
})