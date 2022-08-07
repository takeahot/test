import { FormEvent, useEffect } from "react";
import { useMatch, useNavigate, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { isDataLoaded, saveBookList } from "../../store/action";
import { fetchBooksList } from "../../store/api-actions";
import HomeMain from "../home-main";

export const RoutingAndHomeMain = () => {
    const dispatch = useAppDispatch();
    const { 
        searchParams: dataSearchParams , 
        loading: isLoading , 
        dataLoaded: isLoaded 
    } = useAppSelector((state) => state);
    const [ searchParams , setSearchParams ] = useSearchParams();
    const params = Object.fromEntries(searchParams.entries())
    const navigate = useNavigate();
    const isUrlSearch = useMatch('search-result')
    const isUrlRoot = useMatch('/')

    useEffect(() => {
        if(isLoaded || isLoading) {
            isUrlSearch || navigate('/search-result?' + dataSearchParams)
        } else {
            isUrlRoot || searchParams.toString() || navigate('/');
        }
    },[isLoaded,isLoading])

    useEffect(() => {
        if (searchParams.toString() !== dataSearchParams) {
            if (params.q) {
                dispatch(fetchBooksList(searchParams))
            } else {
                dispatch(saveBookList(undefined)) && dispatch(isDataLoaded(false))
            } 
        }
    },[searchParams.toString()])

    console.log('render RouterAndHomeMain')
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        const formData = new FormData(e.currentTarget);
        const formEntries = Array.from(formData.entries()).map(([k,v]) => [ k , typeof v === 'string' ? v : v.name]);
        const formObj = Object.fromEntries(formEntries);
        if (formObj.subject !== 'all') {
            formObj.q = formObj.q + '+subject:' + formObj.subject
        }
        delete formObj.subject
        if ( 
            searchParams.toString() !== new URLSearchParams(formObj).toString() 
            && !( searchParams.get('q') === null && formObj.q.trim() ==='')
        ) {
            formObj.q.trim() ? setSearchParams(formObj) : setSearchParams({});
        }
        e.preventDefault();
    }

    return (<>
        <HomeMain q={params.q} subject={params.subject} orderBy={params.sortBy} onChangeForm={handleSubmit}/>
    </>)

}

export default RoutingAndHomeMain;