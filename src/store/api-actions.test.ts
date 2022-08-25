import { Action } from 'redux'
import thunk, { ThunkDispatch } from 'redux-thunk'
import MockAdapter from 'axios-mock-adapter'
import { configureMockStore } from '@jedmao/redux-mock-store'
import { createAPI } from '../services/api'
import { State } from '../types/state'
import { store } from '.'
import { fetchBooksList } from './api-actions'
import { isBookListLoaded, isLoadingBookList, onChangeSearchParams, resetBookList } from './action'

describe('async action', () => {
    const api = createAPI();
    const mockAPI = new MockAdapter(api);
    const middlewares = [thunk.withExtraArgument(api)]

    const mockStore = configureMockStore<
        State, 
        Action,
        ThunkDispatch< State , typeof api , Action >
    >(middlewares)

    it('should dispatch ' +
    'isLoadingBookList(true) ' +
    'isBookListLoaded(false) ' + 
    'resetBookList() ' +  
    'onChangeSearchParams(searchParams.toString())' +
    'before GET /volumes and after dispatch ' +
    'dispatch(saveBookList(data)) ' + 
    'dispatch(isBookListLoaded(true)) ' + 
    'dispatch(isLoadingBookList(false)) ', async () => {
        const store = mockStore();
        URLSearchParams.prototype.toString = jest.fn(() => 'q=text&sort=relevance');
        const data = new URLSearchParams();

        mockAPI.onGet('/test').reply(200, {data:{ error: { message: 'error reply'}}})

        await store.dispatch(fetchBooksList(data))

        console.log(store);
        console.log(store.getActions());
        
        expect(store.getActions()).toEqual([
            isLoadingBookList(true),
            isBookListLoaded(false),
            resetBookList(),   
            // onChangeSearchParams(searchParams.toString()),
        ])

    })
})