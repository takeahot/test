import { DEFAULT_CATEGORY , DEFUALT_SORT_BY , DEFAULT_KEY_WORD} from "../const"
import { Answer } from '../types/serverAnswer'
import { createReducer } from "@reduxjs/toolkit";
import { changeCategory, changeKeyWord, changeSortBy, isLoadingBookList, loadBookList } from "./action";
import { CategoriesType, SortTypesType } from "../types/app";

const initialState = {
    searchResult:{
        kind: "books#volumes",
        totalItems: 0,
        items: [],
    } as Answer,
    loading: false as boolean,
    keyWord: DEFAULT_KEY_WORD as string,
    category: DEFAULT_CATEGORY as CategoriesType,
    sortBy: DEFUALT_SORT_BY as SortTypesType
}

const reducer = createReducer( initialState , (builder) => {
    builder
        .addCase( changeKeyWord , ( state , action ) => {
            state.keyWord = action.payload;
        })
        .addCase( changeCategory , ( state , action ) => {
            state.category = action.payload;
        })
        .addCase( changeSortBy , ( state , action ) => {
            state.sortBy = action.payload;
        })
        .addCase( loadBookList , ( state , action ) => {
            state.searchResult = action.payload;
        })
        .addCase( isLoadingBookList , ( state , action ) => {
            state.loading = action.payload;
        })
    })

export {reducer}