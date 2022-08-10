import SearchResult from '../search-result';
import SingleBook from '../single-book';
import E404 from '../e-404';

import { 
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';

import RoutingAndHomeMain from '../routing-and-home-main';
import { BackToSearch } from '../back-to-search';

function App() {

    // console.log('render app');

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<RoutingAndHomeMain />}>
                        <Route path="search-result" element={<SearchResult />} />
                        <Route path="book">
                            <Route index element={<BackToSearch />} />
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
