import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch } from "../types/state";
import { AxiosInstance } from "axios";
import Answer from "../types/serverAnswer";
import { isDataLoaded, isLoadingBookList, onChangeSearchParams, saveBookList } from "./action";

export const fetchBooksList = createAsyncThunk <
    void,
    URLSearchParams,
    {
        dispatch: AppDispatch,
        extra: AxiosInstance
    }
>(
    'data/fetchBooksList',
    async (searchParams , {dispatch, extra: api}) => {
        console.log('data/fetchBooksList start')
        dispatch(isLoadingBookList(true));
        dispatch(isDataLoaded(false));
        dispatch(saveBookList(undefined))
        dispatch(onChangeSearchParams(searchParams.toString()))
        const {data} = await api.get<Answer>('/volumes'+'?'+searchParams.toString()+'&maxResults=30')
        dispatch(saveBookList(data));
        dispatch(isDataLoaded(true));
        dispatch(isLoadingBookList(false));
        console.log('data/fetchBooksList end')
    } 
)