import { CategoriesType, SortTypesType } from "./app"
import Answer from "./serverAnswer"

export type State = {
    searchResult: Answer,
    keyWord: string,
    category: CategoriesType,
    sortBy: SortTypesType,
}