import { createAction } from '@reduxjs/toolkit'
import Answer, { BookItem } from '../types/serverAnswer'

export const onChangeSearchParams = createAction<string>('data/onChangeSearchParams');
export const saveBookList = createAction<Answer>('data/saveBookList'); 
export const addBookToBookList = createAction<Array<BookItem>>('data/addBookToBookList'); 
export const isLoadingBookList = createAction<boolean>('data/isLoadingBookList');
export const isDataLoaded = createAction<boolean>('data/isDataLoaded');
export const isLoadingNextPage = createAction<boolean>('data/isLoadingNextPage');
export const resetdSearchResult = createAction('data/resetdSearchResult');
export const correctTotalItems = createAction('data/correctTotalItems');
export const setError = createAction<string | null>('error/setError');