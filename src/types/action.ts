import { CategoriesType, SortTypesType } from "../types/app";
import { changeKeyWord , changeCategory , changeSortBy , loadBookList } from "../store/action";

export enum ActionType {
    ChangeKeyWord = 'search/changeKeyWord',
    ChangeCategory = 'search/changeCategory',
    ChangeSortBy = 'search/changeSortBy',
    LoadBookList = 'data/loadBookList',
}

export type Actions = 
    | ReturnType<typeof changeKeyWord>
    | ReturnType<typeof changeCategory>
    | ReturnType<typeof changeSortBy>
    | ReturnType<typeof loadBookList>