import { ThemeProvider } from '@mui/material/styles';
import { 
  Grid, 
  Link,
} from '@mui/material';
import { darkTheme } from '../../styles/theme';

import HomeMain from '../home-main';
import SearchResult from '../search-result';
import SingleBook from '../single-book';
import E404 from '../e-404';

import { 
    BrowserRouter,
    Routes,
    Route,
    Outlet,
} from 'react-router-dom';

import { Box } from '@mui/system';
// import book3 from './img/book3.jfif';

import answer from '../../data'
import { answerTypeCheck } from '../../data'

function App() {

    console.log(answerTypeCheck());

    // return ( <>
    //     <Typography>Loaded</Typography>
    // </>)
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route 
                    path='/' element={
                        <Grid container flexDirection='column' flexWrap='nowrap' minHeight='366px' height="100%">
                            <ThemeProvider theme={darkTheme}>
                                <HomeMain />
                            </ThemeProvider>
                            <Outlet />
                        </Grid>
                    }
                >
                    <Route path="search-result" element={<SearchResult serverResponse={answer} />} />
                    <Route path="book">
                        <Route 
                            index
                            element={
                                <Box my='100px' mx='auto' >
                                    <Link variant='button' href='/search-result'>
                                        Back to search-result page
                                    </Link>
                                </Box>
                            }
                        />
                        <Route path=':bookId' element={<SingleBook />} /> 
                    </Route>
                </Route>
                <Route path="*" element={<E404 />} />
           </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
