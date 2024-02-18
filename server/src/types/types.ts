
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

export type Und<T> = undefined | T ;

export type RootFunc<T> = (id:Id) => T;

export interface IRoot {
    users:()=>IUsers[],
    albums:RootFunc<IAlbums[]>,
    photos:RootFunc<IPhotos[]>
};

export interface Id {
    id:string
};

export interface Generate {
 generateUsers:(num:number)=>void,
 generateAlbums:(num:number,users:IUsers[])=>void,
 generatePhotos:(num:number,albums:IAlbums[])=>void,
}