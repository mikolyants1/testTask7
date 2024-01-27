import { Persistor, persistReducer, persistStore } from "redux-persist";
import { Action, Config, IStore, selector } from "../types/types";
import storage from "redux-persist/lib/storage";
import slice, { actions } from "./slice/slice";
import { bindActionCreators, combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const config:Config = {
    key:'albums',
    storage
}

const combine = combineReducers({
    album:slice
})

const persist = persistReducer(config,combine);

export const store = configureStore({
    reducer:persist
})

const useAppDispatch:Action = useDispatch;

export const useAction = () => {
 return bindActionCreators(actions,useAppDispatch());
};
export const useAppSelelctor:selector = useSelector;

export const getPhotos = ({album}:IStore) => album.photos;

export const hash:Persistor = persistStore(store);
