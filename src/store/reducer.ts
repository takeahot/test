import { Answer } from '../types/serverAnswer'
import { createReducer } from "@reduxjs/toolkit";
import { 
    onChangeSearchParams,
    isLoadingBookList, 
    saveBookList,
    isBookListLoaded,
    isLoadingNextPage,
    resetBookList,
    addBookToBookList,
    correctTotalItems,
    setError,
} from "./action";

const initialState = {
    searchResult:{
        kind: "books#volumes",
        totalItems: 0,
        items: [],
    } as Answer,
    loading: false as boolean,
    dataLoaded: false as boolean,
    searchParams: '' as string,
    loadingNextPage: false as boolean,
    error: null as string | null
}

const reducer = createReducer( initialState , (builder) => {
    builder
        .addCase( onChangeSearchParams , ( state , action ) => {
            state.searchParams = action.payload
        })
        .addCase( resetBookList , ( state ) => {
            state.searchResult = initialState.searchResult;
            state.searchParams = initialState.searchParams;
        })
        .addCase( saveBookList , ( state , action ) => {
            state.searchResult = action.payload;
        })
        .addCase( isLoadingBookList , ( state , action ) => {
            state.loading = action.payload;
        })
        .addCase( isBookListLoaded , ( state , action ) => {
            state.dataLoaded = action.payload;
        })
        .addCase( addBookToBookList , ( state , action ) => {
            state.searchResult.items = [...state.searchResult.items, ...action.payload];
        })
        .addCase( isLoadingNextPage , ( state , action ) => {
            state.loadingNextPage = action.payload;
        })
        .addCase( correctTotalItems , ( state ) => {
            state.searchResult.totalItems = state.searchResult.items.length;
        })
        .addCase( setError , ( state , action ) => {
            state.error = action.payload;
        })
    })
    
export {reducer}