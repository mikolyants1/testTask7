import { GraphQLSchema } from "graphql";
import { Query } from "./schema/query.js";

export const Schema:GraphQLSchema = new GraphQLSchema({
    query:Query
})