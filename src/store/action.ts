import { createAction } from '@reduxjs/toolkit'
import { CategoriesType, SortTypesType } from '../types/app'
import Answer from '../types/serverAnswer'

export const onChangeSearchParams = createAction<string>('search/changeSearchParams');
export const saveBookList = createAction<Answer | undefined>('data/saveBookList'); 
export const isLoadingBookList = createAction<boolean>('data/loadingBookList');
export const isDataLoaded = createAction<boolean>('data/isDataLoaded');
