import { createAction } from '@reduxjs/toolkit'
import { ActionType } from '../types/action'
import { CategoriesType, SortTypesType } from '../types/app'
import Answer from '../types/serverAnswer'

export const changeKeyWord = createAction<string>('search/changeKeyWord');
export const changeCategory = createAction<CategoriesType>('search/changeCategory'); 
export const changeSortBy = createAction<SortTypesType>('search/changeSortBy'); 
export const loadBookList = createAction<Answer>('data/loadBookList'); 
