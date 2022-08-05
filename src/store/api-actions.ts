import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch } from "../types/state";
import { AxiosInstance } from "axios";
import Answer from "../types/serverAnswer";
import { isLoadingBookList, loadBookList } from "./action";

export const fetchBooksList = createAsyncThunk <
    void,
    {[key: string]:string },
    {
        dispatch: AppDispatch,
        extra: AxiosInstance
    }
>(
    'data/fetchBooksList',
    async (params , {dispatch, extra: api}) => {
        dispatch(isLoadingBookList(true));
        const {data} = await api.get<Answer>('/volumes',{params})
        dispatch(loadBookList(data));
        dispatch(isLoadingBookList(false));
    } 
)