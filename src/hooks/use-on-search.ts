import { Dispatch, FormEvent, SetStateAction, useEffect, useState } from 'react';
import { useMatch, useNavigate, useSearchParams } from 'react-router-dom';

type ResultOnSearch = [
    URLSearchParams,
    (e: FormEvent<HTMLFormElement>) => void ,
    string,
    string,
    string,
    Dispatch<SetStateAction<string>>,
    Dispatch<SetStateAction<string>>,
    Dispatch<SetStateAction<string>>,
  ]

export const useOnSearch = ():ResultOnSearch => {
  // let [ count , setCount ] = useState(0);
  const [ searchParams , setSearchParams ] = useSearchParams();
  const isUrlSearch = useMatch('/search-result');
  const isUrlRoot = useMatch('/');
  const navigate = useNavigate();
  // const { search } = useLocation();
  // console.log(search)
  const params = Object.fromEntries(searchParams.entries());

  const [ q , setQ ] = useState(params.q);
  const [ subject , setSubject ] = useState(params.subject);
  const [ sortBy , setSortBy ] = useState(params.sortBy);

  useEffect (() => {
    q !== params.q && setQ(params.q);
    subject !== params.subject && setSubject(params.subject);
    sortBy !== params.sortBy && setSortBy(params.sortBy);
  },[searchParams]);

  const onSearch = (e: FormEvent<HTMLFormElement>) => {
    // console.log('useOnSearch'  );
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formEntries = Array.from(formData.entries()).map(([k,v]) => [ k , typeof v === 'string' ? v : v.name]);
    const formObj = Object.fromEntries(formEntries);
    if (formObj.subject !== 'all') {
      formObj.q = `${formObj.q} +subject: ${formObj.subject}`;
    }
    delete formObj.subject;
    const formSearchParams = new URLSearchParams(formObj);
    if (
      searchParams.toString() !== formSearchParams.toString()
    ) {
      if (formObj.q.trim()) {
        isUrlSearch ?
          setSearchParams(formSearchParams.toString()) :
          navigate(`/search-result?${formSearchParams.toString()}`);
      } else {
        isUrlRoot ?
          searchParams.toString() && setSearchParams({}) :
          navigate('/');
      }
    }
  };

  return [ searchParams , onSearch , q , subject , sortBy ,setQ , setSubject , setSortBy ];
};
