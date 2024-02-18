import { PayloadAction } from "@reduxjs/toolkit"
import {WebStorage} from 'redux-persist';
import { store } from "../store/store";
import { TypedUseSelectorHook } from "react-redux";
import { Dispatch, SetStateAction } from "react";

export interface Config {
    key:string,
    storage:WebStorage
}
export interface initial {
   photos:IPhotos[]
}
export type Pay<T> = PayloadAction<T>;


export interface IUsers {
    id:string,
    name:string,
    username:string,
    email:string
}

export interface IQuery  {
    users:IUsers[],
    albums:IAlbums[],
    photos:IPhotos[]
} 

export type Gql<T extends keyof IQuery> = Pick<IQuery,T>;

export interface IPhotos {
    albumId:string,
    id:string,
    title:string,
    url:string
}

export interface IAlbums {
    albumId:string,
    userId:string,
    title:string
}

export interface IAll {
    id:string,
    name:string,
    username:string,
    email:string,
};

export interface IStore {
    album:initial
};

export type context = {
  setUrl:Dispatch<SetStateAction<string>>,
  setOpen:Dispatch<SetStateAction<boolean>>
};

export type Und<T> = T | undefined ;

type select = ReturnType<typeof store.getState>;

export type selector = TypedUseSelectorHook<select>;

export type Action = () => typeof store.dispatch