import { 
    CircularProgress,
  Link,
} from '@mui/material';

import HomeMain from '../home-main';
import SearchResult from '../search-result';
import SingleBook from '../single-book';
import E404 from '../e-404';

import { 
    BrowserRouter,
    Routes,
    Route,
    useSearchParams,
    useNavigate,
} from 'react-router-dom';

import { Box } from '@mui/system';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchBooksList } from '../../store/api-actions';
import { isDataLoaded, saveBookList } from '../../store/action';
import RoutingAndHomeMain from '../routing-and-home-main';

function App() {

    // TODO handle error answer

    console.log('render app');

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<RoutingAndHomeMain />}>
                        <Route path="search-result" element={
                            // isLoading ? 
                            // <Box mx='auto' pt='30vh'><CircularProgress /></Box> :
                            <SearchResult />
                        } />
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
