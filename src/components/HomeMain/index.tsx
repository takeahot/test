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

const categories = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'];
const sortTypes = ['relevance','newest'];

const HomeMain = () => {

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
                                    <IconButton>
                                        <SearchIcon></SearchIcon>
                                    </IconButton>
                                } 
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
            {
                /*
                HomePaper
                Header
                SearchElem
                CategoriesFilter
                SortConfSelect
                */
            }
        </>
    )
}

export default HomeMain;