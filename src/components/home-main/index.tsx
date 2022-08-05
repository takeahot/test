import { 
    HomePaper, 
    MainHeader, 
    MainInput
} from "../../styles/homeMain";

import { 
    Select,
    MenuItem,
    Box, 
    FormControl, 
    IconButton, 
    Grid,
    InputLabel,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search"

import { 
    Outlet, 
    useSearchParams ,
    useNavigate ,
    useMatch
} from "react-router-dom";

import { categories , sortTypes } from "../../const";

import { useAppDispatch , useAppSelector } from "../../hooks";
import { changeKeyWord , changeCategory, changeSortBy } from "../../store/action";

import { KeyboardEvent, useEffect, useRef } from "react";
import { fetchBooksList } from "../../store/api-actions";

import paramsToObj from "../../utils/paramsToObj";

const HomeMain = () => {
    const dispatch = useAppDispatch();
    const matchUrlSearchQuery = useMatch('/search-result');
    const matchUrlEmpty = useMatch('')
    const navigate = useNavigate();
    let [ searchParams , setSearchParams ] = useSearchParams();
    const params = paramsToObj(searchParams);
    
    useEffect(() => {
        dispatch(changeKeyWord(params.q || ''));
        dispatch(fetchBooksList(params));
        params.q || matchUrlEmpty || navigate('/');
        console.log('keyWord update');
    },[params])

    // console.log(useAppSelector((state) => state))

    const inp = useRef<HTMLInputElement>(null)
    const onClickSearchIcon = () => {
        if (inp.current) {
            if (!!inp.current.value) {
                if (!matchUrlSearchQuery) {
                    navigate(`/search-result/?q=${inp.current.value}`);
                } else {
                    inp.current.value !== params.q && setSearchParams({q: inp.current.value})
                }
            } else {
                    setSearchParams({})
            }
        } else {
            return (
                <h1> unknown error </h1>
            )
        }
    }
    const onPressEnter = (e: KeyboardEvent<HTMLInputElement> ) => {
        if (e.key === 'Enter') {
            onClickSearchIcon();
        }
    }

    return (
        <>
            < HomePaper elevation={0} sx={{ pb: 3 }}>
                <Box px={{xs: 1, sm: 8, md: 25, lg: 30, xl: 40}}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <MainHeader variant='h2' align='center'>
                                Search for books
                            </MainHeader>
                        </Grid> 
                        <Grid item xs={12}>
                            <MainInput
                                fullWidth
                                size='small'
                                endAdornment={
                                    <IconButton onClick={onClickSearchIcon}>
                                        <SearchIcon></SearchIcon>
                                    </IconButton>
                                } 
                                inputRef={inp}
                                defaultValue={params.q || ''}
                                onKeyPress={onPressEnter} 
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <InputLabel>
                                    Categories
                                </InputLabel>
                                <Select 
                                    fullWidth 
                                    size='small' 
                                    defaultValue={'all'}
                                    input={<MainInput />}
                                    >
                                    {categories
                                        .map((item) => (
                                        <MenuItem
                                            key={item}
                                            value={item}
                                        >
                                            {item}
                                        </MenuItem>
                                        ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <InputLabel>
                                    Sorting by
                                </InputLabel>
                                <Select 
                                    fullWidth
                                    size='small'
                                    defaultValue={'relevance'}
                                    input={<MainInput />}
                                    >
                                    {sortTypes
                                        .map((item) => (
                                        <MenuItem
                                            key={item}
                                            value={item}
                                        >
                                            {item}
                                        </MenuItem>))}
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid> 
               </Box>
            </HomePaper>
        </>
    )
}

export default HomeMain;
