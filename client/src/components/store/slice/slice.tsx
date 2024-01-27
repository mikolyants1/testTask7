import { IPhotos, Pay, initial } from "../../types/types";
import {createSlice} from '@reduxjs/toolkit';

const initialState:initial = {
    photos:[]
}

const PhotoSlice = createSlice({
    name:'photos',
    initialState,
    reducers:{
       setFavor:(state:initial,action:Pay<IPhotos>):void=>{
        state.photos = [
            ...state.photos,
            action.payload
        ];
       },
       delFavor:(state:initial,action:Pay<string>):void=>{
        state.photos = state.photos.filter(
        (i:IPhotos)=>i.url !== action.payload);
       },
    }
})

export const actions = PhotoSlice.actions;
export default PhotoSlice.reducer