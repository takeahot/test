import { ActionType, Actions } from "../types/action";
import { State } from '../types/state'
import { DEFAULT_CATEGORY , DEFUALT_SORT_BY , DEFAULT_KEY_WORD} from "../const"

const initialState = {
    searchResult: {
        kind: "books#volumes",
        totalItems: 0,
        items: [],
    },
    keyWord: DEFAULT_KEY_WORD,
    category: DEFAULT_CATEGORY,
    sortBy: DEFUALT_SORT_BY
} as State

const reducer = (state: State = initialState, action: Actions ): State => {
    switch (action.type) {
        case ActionType.ChangeKeyWord:
            return {
                ...state,
                keyWord: action.payload
            }
        case ActionType.ChangeCategory: 
            return {
                ...state,
                category: action.payload
            }
        case ActionType.ChangeSortBy: 
            return {
                ...state,
                sortBy: action.payload
            }
        default:
            return {
                ...state
            }
    } 
} 

export {reducer}