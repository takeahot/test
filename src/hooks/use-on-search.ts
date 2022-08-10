import { FormEvent } from "react";
import { useMatch, useNavigate, useSearchParams } from "react-router-dom";

type ResultOnSearch = [URLSearchParams,(e: FormEvent<HTMLFormElement>) => void]

export const useOnSearch = ():ResultOnSearch => {
    // let [ count , setCount ] = useState(0);
    const [ searchParams , setSearchParams ] = useSearchParams();
    const isUrlSearch = useMatch('/search-result')
    const isUrlRoot = useMatch('/')
    const navigate = useNavigate();

    const onSearch = (e: FormEvent<HTMLFormElement>) => {
        // console.log('useOnSearch'  );
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const formEntries = Array.from(formData.entries()).map(([k,v]) => [ k , typeof v === 'string' ? v : v.name]);
        const formObj = Object.fromEntries(formEntries);
        if (formObj.subject !== 'all') {
            formObj.q = formObj.q + '+subject:' + formObj.subject
        }
        delete formObj.subject
        const formSearchParams = new URLSearchParams(formObj)
        if ( 
            searchParams.toString() !== formSearchParams.toString() 
        ) {
            formObj.q.trim() ? 
                isUrlSearch ?
                    setSearchParams(formSearchParams.toString()) : 
                    navigate('/search-result?'+formSearchParams.toString())
                :
                isUrlRoot ?
                    searchParams.toString() && setSearchParams({}):
                    navigate('/')
        }
    }

    return [searchParams,onSearch]
}
