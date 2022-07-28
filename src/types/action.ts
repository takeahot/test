import { CategoriesType, SortTypesType } from "../types/app";

export enum ActionType {
    ChangeKeyWord = 'search/changeKeyWord',
    ChangeCategory = 'search/changeCategory',
    ChangeSortBy = 'search/changeSortBy',
}

export type ChangeKeyWordAction = {
    type: ActionType.ChangeKeyWord,
    payload: string;
}

export type ChangeCategoryAction = {
    type: ActionType.ChangeCategory,
    payload: CategoriesType
}

export type ChangeSortByAction = {
    type: ActionType.ChangeSortBy,
    payload: SortTypesType
}

export type Actions = 
    ChangeKeyWordAction|
    ChangeCategoryAction|
    ChangeSortByAction