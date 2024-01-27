import { Request, Response } from "express"


export interface IUsers {
    id:string,
    name:string,
    username:string,
    email:string
}

export interface IPhotos {
    albumId:string,
    id:string,
    title:string,
    url:string
}

export interface IAlbums {
    albumId: string,
    userId: string,
    title:string
}

export type func = (req:Request,res:Response)=>void;

export interface EndPoints {
    getUsers:func,
    getUser:func,
    getAlbum:func,
    getPhotos:func
}

export interface Generate {
 generateUsers:(num:number)=>void,
 generateAlbums:(num:number,users:IUsers[])=>void,
 generatePhotos:(num:number,albums:IAlbums[])=>void,
}