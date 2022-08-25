import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import Answer from '../types/serverAnswer';
import {
  addBookToBookList,
  correctTotalItems,
  isBookListLoaded,
  isLoadingBookList,
  isLoadingNextPage,
  onChangeSearchParams,
  resetBookList,
  saveBookList,
  setError
} from './action';
import { QUANTITY_ITEMS_ON_PAGE, TIMEOUT_SHOW_ERROR } from '../const';
import { keys } from '../config';
import { processErrorHandle } from '../services/process-error-handle';

export const fetchBooksList = createAsyncThunk<
  void,
  URLSearchParams,
  {
    dispatch: AppDispatch,
    extra: AxiosInstance
  }
>(
  'data/fetchBooksList',
  async (searchParams, { dispatch, extra: api }) => {
    dispatch(isLoadingBookList(true));
    dispatch(isBookListLoaded(false));
    dispatch(resetBookList());
    dispatch(onChangeSearchParams(searchParams.toString()));
    console.log('/volumes?' +
      `${searchParams.toString()}` +
      `&maxResults=${QUANTITY_ITEMS_ON_PAGE}` +
      `&key=${keys.APIKey} `);
    try {
      const { data } = await api.get<Answer>(
        '/volumes?' +
        `${searchParams.toString()}` +
        `&maxResults=${QUANTITY_ITEMS_ON_PAGE}` +
        `&key=${keys.APIKey}`
      );
      dispatch(saveBookList(data));
      dispatch(isBookListLoaded(true));
    } catch (error) {
      processErrorHandle(error);
    }
    dispatch(isLoadingBookList(false));
  }
);

export const clearErrorAction = createAsyncThunk<
    void,
    undefined,
    {
      dispatch: AppDispatch,
    }
  >(
    'error/clearError',
    (_arg, { dispatch }) => {
      setTimeout(
        () => dispatch(setError(null)),
        TIMEOUT_SHOW_ERROR,
      );
    },
  );

export const fetchNextPageBooksList = createAsyncThunk<
  void,
  URLSearchParams,
  {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
  }
>(
  'data/fetchNextPageBooksList',
  async (searchParams, { getState, dispatch, extra: api }) => {
    dispatch(isLoadingNextPage(true));
    const state = getState();
    let pageNumber = 0;
    if (!state.searchResult.items.length) {
      dispatch(isLoadingBookList(true));
      dispatch(isBookListLoaded(false));
      dispatch(resetBookList());
      dispatch(onChangeSearchParams(searchParams.toString()));
    } else {
      pageNumber = state.searchResult.items.length / QUANTITY_ITEMS_ON_PAGE;
    }
    try {
      const { data } = await api.get<Answer>(
        '/volumes?' +
        `${searchParams.toString()}` +
        `&maxResults=${QUANTITY_ITEMS_ON_PAGE}` +
        `&startIndex=${pageNumber * QUANTITY_ITEMS_ON_PAGE}` +
        `&key=${keys.APIKey}`
      );
      if (!state.searchResult.items.length){
        dispatch(saveBookList(data));
      } else {
        data.items.length < 30 ?
          dispatch(addBookToBookList(data.items)) && dispatch(correctTotalItems()) :
          dispatch(addBookToBookList(data.items));
      }
      dispatch(isBookListLoaded(true));
    } catch (error) {
      processErrorHandle(error);
    }
    dispatch(isLoadingBookList(false));
    dispatch(isLoadingNextPage(false));
  }
);
