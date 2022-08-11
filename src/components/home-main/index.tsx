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
    SelectChangeEvent,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search"

import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from '../../styles/theme';

import { 
    Outlet, 
} from "react-router-dom";

import { categories , sortTypes } from "../../const";

import { 
    ChangeEvent,
    useEffect,
    useState 
} from "react";
import { ServerErr } from "../server-error";
import { useOnSearch } from "../../hooks/use-on-search";

const HomeMain = () => {

    const [ searchParams , onSearch , q , subject , sortBy,  setQ , setSubject , setSortBy ] = useOnSearch();

    // console.log('render HomeMain');

    return (
        <>
            <Grid container flexDirection='column' flexWrap='nowrap' minHeight='366px' height="100%">
                <ThemeProvider theme={darkTheme}>
                    < HomePaper elevation={0} sx={{ pb: 3 }}>
                        <Box component='form' id='search-form' onSubmit={onSearch} px={{xs: 1, sm: 8, md: 25, lg: 30, xl: 40}}>
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
                <ServerErr />
                <Outlet />
            </Grid>
        </>
    )
}

export default HomeMain;
