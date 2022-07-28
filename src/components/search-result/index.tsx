import { 
    Grid, 
    Typography, 
    CardActionArea, 
    CardContent,
    Button,
    Box,
} from '@mui/material'
import { GrayCard , BookCover, CategoriesTypography } from '../../styles/searchResult';

import answer from "../../types/serverAnswer"

const SearchResult = (props: {serverResponse: answer }): JSX.Element => {

    const resultCount = props.serverResponse.totalItems;

    return (
        <>
            <Box>
                <Typography align='center' sx={{ pt: 1 }}>
                    Found {resultCount} result
                </Typography>
            </Box>
            <Grid container spacing={6} px={5} py={2}>
                {
                    props.serverResponse.items.map(item => {
                        return ( 
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={item.id}>
                            <GrayCard elevation={0}>
                                <CardActionArea href={`/book/${item.id}`}>
                                    <BookCover
                                        component='img'
                                        image={item.volumeInfo.imageLinks.thumbnail}
                                        height="270px"
                                        width='auto'
                                    />
                                    <CardContent>
                                        <CategoriesTypography variant='body1'>
                                            {item.volumeInfo.categories[0]}
                                        </CategoriesTypography>
                                        <Typography variant='h6'>
                                            {item.volumeInfo.title}
                                        </Typography> 
                                        <Typography variant='body2'>
                                            {item.volumeInfo.authors.join(' , ')}
                                        </Typography> 
                                    </CardContent>
                                </CardActionArea>
                            </GrayCard>
                        </Grid>
                        )
                    })
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