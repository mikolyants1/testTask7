import express,{Express} from "express";
import cors from 'cors'
import {graphqlHTTP} from 'express-graphql';
import { Schema } from "./gql/schema.js";
import { root } from "./gql/schema/root.js";

const PORT:string|number = process.env.PORT || 3000;

const app:Express = express();

app.use(express.json());

app.use(cors());

app.use("/",graphqlHTTP({
  graphiql:true,
  schema:Schema,
  rootValue:root
}));

app.listen(PORT,():void => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
