import {GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";
import { User } from "../types/users.js";
import { Album } from "../types/albums.js";
import { Photo } from "../types/photos.js";

export const Query = new GraphQLObjectType({
    name:"Query",
    fields:()=>({
       users:{
         type:new GraphQLList(User)
       },
       albums:{
         type:new GraphQLList(Album),
         args:{id:{type:GraphQLString}}
       },
       photos:{
        type:new GraphQLList(Photo),
        args:{id:{type:GraphQLString}}
      }
    })
})