import { ActionType , ChangeKeyWordAction , ChangeCategoryAction , ChangeSortByAction } from '../types/action'
import { CategoriesType, SortTypesType } from '../types/app'

export const changeKeyWord = (word: string): ChangeKeyWordAction => ({
    type: ActionType.ChangeKeyWord,
    payload: word,
})

export const changeCategory = (category: CategoriesType): ChangeCategoryAction => ({
    type: ActionType.ChangeCategory,
    payload: category,
})

export const changeSortBy = (sort: SortTypesType ): ChangeSortByAction => ({
    type: ActionType.ChangeSortBy,
    payload: sort,
})