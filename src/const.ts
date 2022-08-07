
export const categories = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'] as const;
export const DEFAULT_CATEGORY = categories[0];

export const sortTypes = ['relevance','newest'] as const;
export const DEFUALT_SORT_BY = sortTypes[0]; 

export const DEFAULT_KEY_WORD = "";

export const QUANTITY_ITEMS_ON_PAGE = 30;

export enum APIRoute {
    Volumes = '/volumes',
}