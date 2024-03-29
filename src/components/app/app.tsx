import SearchResult from '../search-result';
import SingleBook from '../single-book';
import E404 from '../e-404';

import {
  // BrowserRouter,
  Routes,
  Route,
  unstable_HistoryRouter as HistoryRouter,
} from 'react-router-dom';

import { BackToSearch } from '../back-to-search';
import { useHandleSearchParams } from '../../hooks/use-handle-search-params';
import browserHistory from '../../browser-history';
import HomeMain from '../home-main';

function App() {

  useHandleSearchParams(browserHistory);

  // console.log('render app');

  return (
    <div className="App">
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path='/' element={<HomeMain />}>
            <Route index element={
              <div style={{margin: 'auto'}}>
                <h3 >
                  Book search with category selection and convenient sorting
                </h3>
                <ul>
                  <li>Select category</li>
                  <li>Select sort method</li>
                  <li>Type keywords</li>
                  <li>Push Enter or click magnifier</li>
                </ul>
                <p> Click to book and read details. Enjoy! </p>
              </div>
            }
            />
            <Route path="search-result" element={<SearchResult />} />
            <Route path="book">
              <Route index element={<BackToSearch />} />
              <Route path=':bookId' element={<SingleBook />} />
            </Route>
          </Route>
          <Route path="*" element={<E404 />} />
        </Routes>
      </HistoryRouter>
    </div>
  );
}

export default App;
