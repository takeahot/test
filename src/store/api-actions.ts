import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, State } from "../types/state";
import { AxiosInstance } from "axios";
import Answer from "../types/serverAnswer";
import { addBookToBookList, isDataLoaded, isLoadingBookList, isLoadingNextPage, onChangeSearchParams, resetdSearchResult, saveBookList } from "./action";
import { QUANTITY_ITEMS_ON_PAGE } from "../const";

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
        dispatch(resetdSearchResult())
        dispatch(onChangeSearchParams(searchParams.toString()))
        const {data} = await api.get<Answer>('/volumes'+'?'+searchParams.toString()+'&maxResults='+QUANTITY_ITEMS_ON_PAGE)
        dispatch(saveBookList(data));
        dispatch(isDataLoaded(true));
        dispatch(isLoadingBookList(false));
        console.log('data/fetchBooksList end')
    } 
)

export const fetchNextPageBooksList = createAsyncThunk <
    void,
    URLSearchParams,
    {
        dispatch: AppDispatch,
        state: State,
        extra: AxiosInstance
    }
>(
    'data/fetchNextPageBooksList',
    async ( searchParams , { getState , dispatch, extra: api }) => {
        console.log('data/fetchNextPageBooksList start')
        dispatch(isLoadingNextPage(true));
        const state = getState();
        let pageNumber: number = 0
        if (!state.searchResult.items.length) {
            dispatch(isLoadingBookList(true));
            dispatch(isDataLoaded(false));
            dispatch(resetdSearchResult())
            dispatch(onChangeSearchParams(searchParams.toString()))
        } else {
            pageNumber = state.searchResult.items.length / QUANTITY_ITEMS_ON_PAGE
        }
        const {data} = await api.get<Answer>(
            `/volumes?
${searchParams.toString()}
&maxResults=${QUANTITY_ITEMS_ON_PAGE}
&startIndex=${pageNumber * QUANTITY_ITEMS_ON_PAGE}`)
        state.searchResult.items.length ? 
            dispatch(addBookToBookList(data.items)):
            dispatch(saveBookList(data));
        dispatch(isDataLoaded(true));
        dispatch(isLoadingBookList(false));
        dispatch(isLoadingNextPage(false));
        console.log('data/fetchNextPageBooksList end')
    } 
)