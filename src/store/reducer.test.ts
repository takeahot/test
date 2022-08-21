import Answer from '../types/serverAnswer';
import { addBookToBookList, correctTotalItems, isBookListLoaded, isLoadingBookList, isLoadingNextPage, onChangeSearchParams, resetBookList, saveBookList, setError } from './action';
import { reducer } from './reducer'
import answer from '../mocks/data';
import Search from '@mui/icons-material/Search';

const initialState = {
    searchResult:{
        kind: "books#volumes",
        totalItems: 0,
        items: [],
    } as Answer,
    loading: false as boolean,
    dataLoaded: false as boolean,
    searchParams: '' as string,
    loadingNextPage: false as boolean,
    error: null as string | null
}

describe('Reducer', () => {
  it('without additional parameters should return initial state', () => {
    expect(reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(initialState);
  });

  it('should change searchParams', () => {
    expect(reducer( initialState , onChangeSearchParams('new=search&params=0')))
      .toEqual(expect.objectContaining({...initialState, searchParams:'new=search&params=0'}))
  });

  it('should put initial state for searchResult and searchPrams' , () => {
    expect(reducer( initialState , resetBookList()))
      .toEqual(expect.
        objectContaining({
          ...initialState, 
          searchParams:initialState.searchParams,
          searchResult:initialState.searchResult
        }))
  });

  it('should put data to searchResult' , () => {
    const dataFromServer = {
      ...initialState, 
      searchResult: {
        kind: "test",
        totalItems: 222,
        items: answer.items
      }
    }
    expect(reducer( initialState , saveBookList(dataFromServer.searchResult)))
      .toEqual(expect.
        objectContaining({
          ...initialState, 
          searchResult:dataFromServer.searchResult
        }))
  });

  it('should set state to loading' , () => {

    expect(reducer( initialState , isLoadingBookList(true)))
      .toEqual(expect.
        objectContaining({
          ...initialState, 
          loading:true
        }))

    expect(reducer( { ...initialState , loading: true } , isLoadingBookList(false)))
      .toEqual(expect.
        objectContaining({
          ...initialState, 
          loading:false
        }))
  });

  it('should set state to dataLoaded' , () => {

    expect(reducer( initialState , isBookListLoaded(true)))
      .toEqual(expect.
        objectContaining({
          ...initialState, 
          dataLoaded:true
        }))

    expect(reducer( { ...initialState , dataLoaded: true } , isBookListLoaded(false)))
      .toEqual(expect.
        objectContaining({
          ...initialState, 
          dataLoaded:false
        }))
  });

  it('should add data to searchResult' , () => {
    const dataFromServer = {
      ...initialState, 
      searchResult: {
        kind: "test",
        totalItems: 222,
        items: answer.items
      }
    }
    const initWithData = dataFromServer;
    expect(reducer( initWithData , addBookToBookList(dataFromServer.searchResult.items.slice(2,6))))
      .toEqual(expect.
        objectContaining({
          ...initWithData, 
          searchResult: {
            ...initWithData.searchResult, 
            items:[...initWithData.searchResult.items, ...dataFromServer.searchResult.items.slice(2,6)]
          }
        }))
  });

  // isLoadingNextPage 
  it('should set state to loading next part of data' , () => {

    expect(reducer( initialState , isLoadingNextPage(true)))
      .toEqual(expect.
        objectContaining({
          ...initialState, 
          loadingNextPage:true
        }))

    expect(reducer( { ...initialState , loadingNextPage: true } , isLoadingNextPage(false)))
      .toEqual(expect.
        objectContaining({
          ...initialState, 
          loadingNextPage:false
        }))
  });

  it('should chenge totalItem in sotre by length of items' , () => {
    const dataFromServer = {
      ...initialState, 
      searchResult: {
        kind: "test",
        totalItems: 222,
        items: answer.items.slice(0,3)
      }
    }
    const initWithData = dataFromServer;
    expect(reducer( initWithData , correctTotalItems()))
      .toEqual(expect.
        objectContaining({
          ...initWithData, 
          searchResult: {
            ...initWithData.searchResult,
            totalItems: 3
          } 
        }))
  });

// setError
  it('should fill error on store' , () => {

    expect(reducer( initialState , setError('some string')))
      .toEqual(expect.
        objectContaining({
          ...initialState, 
          error: 'some string'
        }))

  });

});
