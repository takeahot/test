import { BrowserHistory } from 'history';
import { useEffect, useState } from 'react';
import { matchPath } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '.';
import { fetchBooksList } from '../store/api-actions';


export const useHandleSearchParams = (history: BrowserHistory) => {

  const [searchParams, setSearchParams] = useState(new URLSearchParams(history.location.search));
  const isUrlSearch = matchPath('/search-result', history.location.pathname);
  const isUrlRoot = matchPath('/', history.location.pathname);
  const {
    searchParams: dataSearchParams,
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();


  useEffect(() => {
    const unlisten = history.listen(
      ({ location, action }) =>
        setSearchParams(new URLSearchParams(location.search))
    );
    if (
      (isUrlRoot || isUrlSearch)
      && searchParams.toString()
      && searchParams.toString() !== dataSearchParams
    ) {
      isUrlSearch || history.push(`/search-result? ${searchParams.toString()}`);
      dispatch(fetchBooksList(searchParams));
    } else if (isUrlSearch && !searchParams.toString()) {
      history.push('/');
    }
    return unlisten;
  }, [dataSearchParams, dispatch, isUrlRoot, isUrlSearch, history, searchParams]);
};
