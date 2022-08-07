import { 
    Grid, 
    Typography, 
    CardActionArea, 
    CardContent,
    Button,
    Box,
    CircularProgress,
} from '@mui/material'
import { useSearchParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { GrayCard , BookCover, CategoriesTypography } from '../../styles/searchResult';

import answer from "../../types/serverAnswer"
import E404 from '../e-404';

const SearchResult = (): JSX.Element => {

    const [searchParams] = useSearchParams();
    const { searchResult : serverResponse , loading } = useAppSelector((state) => state)

    if ( loading ) {
        return (<Box mx='auto' pt='30vh'>
            <CircularProgress />
        </Box>)
    } 

    if (!serverResponse) return <E404> ' нет ответа от сервера ' </E404>
    const resultCount = serverResponse.totalItems;

    // console.log('render search result');
    return (
        <>
            <Box>
                <Typography align='center' sx={{ pt: 1 }}>
                    Found {resultCount} result
                </Typography>
            </Box>
            <Grid container spacing={6} px={5} py={2}>
                {
                    serverResponse.items ?
                    serverResponse.items.map(item => {
                        return ( 
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={item.id}>
                            <GrayCard elevation={0}>
                                <CardActionArea href={`/book/${item.id}`}>
                                    <BookCover
                                        component='img'
                                        image={item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : '/img/notAvaliableImg.png'}
                                        height="270px"
                                        width='auto'
                                    />
                                    <CardContent>
                                        <CategoriesTypography variant='body1'>
                                            { item.volumeInfo.categories ? item.volumeInfo.categories[0] : ''}
                                        </CategoriesTypography>
                                        <Typography variant='h6'>
                                            { item.volumeInfo.title || '' }
                                        </Typography> 
                                        <Typography variant='body2'>
                                            { item.volumeInfo.authors ? item.volumeInfo.authors.join(' , ') : ''}
                                        </Typography> 
                                    </CardContent>
                                </CardActionArea>
                            </GrayCard>
                        </Grid>
                        )
                    }):
                    ''
                }
            </Grid>
            <Box px={5} pb={2}>
                <Button 
                    fullWidth 
                    variant='contained'
                    color="inherit"
                >
                    'More'
                </Button>
            </Box>
        </>
    )
}




export default SearchResult