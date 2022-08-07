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
    StackTypeMap,
    SelectChangeEvent,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search"

import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from '../../styles/theme';

import { 
    Outlet, 
    useSearchParams ,
    useNavigate ,
    useMatch
} from "react-router-dom";

import { categories , sortTypes } from "../../const";

import { useAppDispatch , useAppSelector } from "../../hooks";
import { saveBookList, isDataLoaded } from "../../store/action";

import React, { ChangeEvent, FormEvent, KeyboardEvent, PropsWithChildren, useEffect, useRef, useState } from "react";
import { fetchBooksList } from "../../store/api-actions";

import paramsToObj from "../../utils/paramsToObj";
import { URLSearchParamsInit } from 'react-router-dom'
import { CategoriesType, SortTypesType } from "../../types/app";

interface HomeMainProps extends PropsWithChildren {
    q: string;
    subject: string;
    orderBy: string;
    onChangeForm: (e: FormEvent<HTMLFormElement>) => void
}

const HomeMain = (Props: HomeMainProps ) => {
    const { q: qInit , subject: subjectInit , orderBy: sortByItnit , onChangeForm } = Props;
    //make controled because MUI show error, when change uncontrolled select
    const [ q , setQ ] = useState(qInit);
    const [ subject , setSubject ] = useState(subjectInit);
    const [ sortBy , setSortBy ] = useState(sortByItnit);
    console.log('render HomeMain');
    return (
        <>
            <Grid container flexDirection='column' flexWrap='nowrap' minHeight='366px' height="100%">
                <ThemeProvider theme={darkTheme}>
                    < HomePaper elevation={0} sx={{ pb: 3 }}>
                        <Box component='form' id='search-form' onSubmit={onChangeForm} px={{xs: 1, sm: 8, md: 25, lg: 30, xl: 40}}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <MainHeader variant='h2' align='center'>
                                        Search for books
                                    </MainHeader>
                                </Grid> 
                                <Grid item xs={12}>
                                    <MainInput
                                        name='q'
                                        fullWidth
                                        size='small'
                                        endAdornment={
                                            <IconButton type='submit' form='search-form'>
                                                <SearchIcon></SearchIcon>
                                            </IconButton>
                                        } 
                                        value={ q || ''}
                                        onChange={(e:ChangeEvent<HTMLInputElement>) => setQ(e.currentTarget.value)}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl fullWidth>
                                        <InputLabel>
                                            Categories
                                        </InputLabel>
                                        <Select 
                                            name='subject'
                                            fullWidth 
                                            size='small' 
                                            value={ subject || 'all' }
                                            onChange={(e: SelectChangeEvent<string>) => setSubject(e.target.value)}
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
                                            name='orderBy'
                                            fullWidth
                                            size='small'
                                            value={ sortBy || 'relevance'}
                                            onChange={(e:SelectChangeEvent<string>) => setSortBy(e.target.value)}
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
                </ThemeProvider>
                <Outlet />
            </Grid>
        </>
    )
}

export default HomeMain;
