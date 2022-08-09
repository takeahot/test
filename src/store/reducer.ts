import { Answer } from '../types/serverAnswer'
import { createReducer } from "@reduxjs/toolkit";
import { 
    onChangeSearchParams,
    isLoadingBookList, 
    saveBookList,
    isDataLoaded,
    isLoadingNextPage,
    resetdSearchResult,
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
            console.log(action.type)
        })
        .addCase( saveBookList , ( state , action ) => {
            state.searchResult = action.payload;
            console.log(action.type)
        })
        .addCase( isLoadingBookList , ( state , action ) => {
            state.loading = action.payload;
            console.log(action.type)
        })
        .addCase( isDataLoaded , ( state , action ) => {
            state.dataLoaded = action.payload;
            console.log(action.type)
        })
        .addCase( isLoadingNextPage , ( state , action ) => {
            state.loadingNextPage = action.payload;
            console.log(action.type)
        })
        .addCase( resetdSearchResult , ( state , action ) => {
            state.searchResult = initialState.searchResult;
            state.searchParams = initialState.searchParams;
            console.log(action.type)
        })
        .addCase( addBookToBookList , ( state , action ) => {
            state.searchResult.items = [...state.searchResult.items, ...action.payload];
            console.log(action.type)
        })
        .addCase( correctTotalItems , ( state , action ) => {
            state.searchResult.totalItems = state.searchResult.items.length;
            console.log(action.type)
        })
        .addCase( setError , ( state , action ) => {
            state.error = action.payload;
            console.log(action.type)
        })
    })
    
export {reducer}