import { createAction } from '@reduxjs/toolkit'
import { ActionType } from '../types/action'
import { CategoriesType, SortTypesType } from '../types/app'
import Answer from '../types/serverAnswer'

export const changeKeyWord = createAction<string>(ActionType.ChangeKeyWord);
export const changeCategory = createAction<CategoriesType>(ActionType.ChangeCategory); 
export const changeSortBy = createAction<SortTypesType>(ActionType.ChangeSortBy); 
export const loadBookList = createAction<Answer>(ActionType.LoadBookList); 
