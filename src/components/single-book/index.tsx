import {
  Grid,
  Paper,
  Typography,
  Breadcrumbs,
  Link,
  Box,
  Stack,
} from '@mui/material';
import { Navigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';

import E404 from '../e-404';

const SingleBook = () => {

  // console.log('render single book');

  const searchResult = useAppSelector((state) => state.searchResult);
  const params = useParams();

  if (params.bookId === undefined) {
    return <E404 />;
  }

  const haveBooks = () => !!searchResult.items;
  if (!haveBooks()) {
    return <Navigate to='/' />;
  }

  const getBookItem = (id: string) => searchResult.items.find((item) => item.id === id);

  const bookData = getBookItem(params.bookId);
  if (bookData === undefined) {
    return <Navigate to='/' />;
  }

  return (
    <Grid
      container
      height='100%'
    >
      <Grid
        item
        xs={12}
        sm={5}
        bgcolor='whitesmoke'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Box
          component='img'
          src={bookData.volumeInfo.imageLinks ? bookData.volumeInfo.imageLinks.thumbnail : '/img/notAvaliableImg.png'}
          width='55%'
          boxShadow={22}
        />
      </Grid>
      <Grid
        item
        alignSelf='center'
        xs={12}
        sm={7}
        px={4}
        container
        flexDirection='column'
        justifyContent='flex-start'
      >
        <Grid item pt={5}>
          <Breadcrumbs sx={{}}>
            {
              bookData.volumeInfo.categories ?
                bookData.volumeInfo.categories.map((item, id) => (
                  <Link
                    href={`/search-result?q=subject: ${item}`}
                    underline='hover'
                    color='inherit'
                    key={item}
                  >
                    {item}
                  </Link>
                )
                ) :
                ''
            }
          </Breadcrumbs>
        </Grid>
        <Grid item pt={4}>
          <Typography variant='h5' >
            {bookData.volumeInfo.title}
          </Typography>
        </Grid>
        <Grid item pt={1}>
          <Stack direction='row' spacing={1}>
            {
              bookData.volumeInfo.authors ?
                bookData.volumeInfo.authors.map((author, id) => (
                  <Link
                    href={`/search-result?q=authors:"${author}"`}
                    variant='body2'
                    color='inherit'
                    underline='always'
                    key={author}
                  >
                    {author}
                  </Link>
                )
                )
                : null
            }
          </Stack>
        </Grid>
        <Grid item pt={3} pb={8}>
          <Paper>
            <Typography p={2}>
              {
                bookData.searchInfo ?
                  bookData.searchInfo.textSnippet :
                  ''
              }
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SingleBook;
