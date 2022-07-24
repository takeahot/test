import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { 
  Button, 
  CssBaseline,
  Grid,
} from '@mui/material';
import theme from './styles/theme';
import { darkTheme } from './styles/theme';
import HomeMain from './components/HomeMain';
import SearchResult from './components/SearchResult';
import SingleBook from './components/SingleBook';

import book1 from './img/book1.png';
import book2 from './img/book2.jpg';
// import book3 from './img/book3.jfif';

function App() {

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Grid container flexDirection='column' flexWrap='nowrap' minHeight='366px' height="100%">
            <ThemeProvider theme={darkTheme}>
                <HomeMain />
            </ThemeProvider>
            <SearchResult apiResultItems={apiResultItems} />
            {/* <SingleBook apiResultItem={apiResultItems[0]} /> */}
          </Grid>
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

const apiResultItems = [
    {
        img: book1 ,
        category: 'computers',
        name: 'Eloquent JavaScript: A Modern Introduction to Programming',
        author: 'Marijn Haverbeke',
    },
    {
        img: book2 ,
        category: 'computers',
        name: 'Eloquent JavaScript: A Modern Introduction to Programming',
        author: 'Marijn Haverbeke',
    },
    {
        img: '/img/book1.png' ,
        category: 'computers',
        name: 'Eloquent JavaScript: A Modern Introduction to Programming',
        author: 'Marijn Haverbeke',
    },
    {
        img: '/img/book1.png' ,
        category: 'computers',
        name: 'Eloquent JavaScript: A Modern Introduction to Programming',
        author: 'Marijn Haverbeke',
    },
    {
        img: '/img/book1.png' ,
        category: 'computers',
        name: 'Eloquent JavaScript: A Modern Introduction to Programming',
        author: 'Marijn Haverbeke',
    },
    {
        img: '/img/book1.png' ,
        category: 'computers',
        name: 'Eloquent JavaScript: A Modern Introduction to Programming',
        author: 'Marijn Haverbeke',
    },
    {
        img: '/img/book1.png' ,
        category: 'computers',
        name: 'Eloquent JavaScript: A Modern Introduction to Programming',
        author: 'Marijn Haverbeke',
    },
    {
        img: '/img/book1.png' ,
        category: 'computers',
        name: 'Eloquent JavaScript: A Modern Introduction to Programming',
        author: 'Marijn Haverbeke',
    },
    {
        img: '/img/book1.png' ,
        category: 'computers',
        name: 'Eloquent JavaScript: A Modern Introduction to Programming',
        author: 'Marijn Haverbeke',
    },
    {
        img: '/img/book1.png' ,
        category: 'computers',
        name: 'Eloquent JavaScript: A Modern Introduction to Programming',
        author: 'Marijn Haverbeke',
    },
    {
        img: '/img/book1.png' ,
        category: 'computers',
        name: 'Eloquent JavaScript: A Modern Introduction to Programming',
        author: 'Marijn Haverbeke',
    },
    {
        img: '/img/book1.png' ,
        category: 'computers',
        name: 'Eloquent JavaScript: A Modern Introduction to Programming',
        author: 'Marijn Haverbeke',
    },
    {
        img: '/img/book1.png' ,
        category: 'computers',
        name: 'Eloquent JavaScript: A Modern Introduction to Programming',
        author: 'Marijn Haverbeke',
    },
    {
        img: '/img/book1.png' ,
        category: 'computers',
        name: 'Eloquent JavaScript: A Modern Introduction to Programming',
        author: 'Marijn Haverbeke',
    },
    {
        img: '/img/book1.png' ,
        category: 'computers',
        name: 'Eloquent JavaScript: A Modern Introduction to Programming',
        author: 'Marijn Haverbeke',
    },
    {
        img: '/img/book1.png' ,
        category: 'computers',
        name: 'Eloquent JavaScript: A Modern Introduction to Programming',
        author: 'Marijn Haverbeke',
    }
]

export default App;
