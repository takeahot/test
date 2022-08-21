import { createAction } from '@reduxjs/toolkit'
import Answer, { BookItem } from '../types/serverAnswer'

export const onChangeSearchParams = createAction<string>('data/onChangeSearchParams');
export const saveBookList = createAction<Answer>('data/saveBookList'); 
export const addBookToBookList = createAction<Array<BookItem>>('data/addBookToBookList'); 
export const isLoadingBookList = createAction<boolean>('data/isLoadingBookList');
export const isBookListLoaded = createAction<boolean>('data/isBookListLoaded');
export const isLoadingNextPage = createAction<boolean>('data/isLoadingNextPage');
export const resetBookList = createAction('data/resetBookList');
export const correctTotalItems = createAction('data/correctTotalItems');
export const setError = createAction<string | null>('error/setError');