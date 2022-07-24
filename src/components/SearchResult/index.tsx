import { 
    Grid, 
    Typography, 
    CardActionArea, 
    CardContent,
    Button,
    Box,
} from '@mui/material'
import { GrayCard , BookCover, CategoriesTypography } from '../../styles/searchResult';

interface SearchResultProps {
    apiResultItems: Array<{
        img: string;
        category: string;
        name: string;
        author: string;
    }>
}

const SearchResult = (props: SearchResultProps): JSX.Element => {

    const resultCount = '446';

    return (
        <>
            <Box>
                <Typography align='center' sx={{ pt: 1 }}>
                    Found {resultCount} result
                </Typography>
            </Box>
            <Grid container spacing={6} px={5} py={2}>
                {
                    props.apiResultItems.map(item => {
                        return ( 
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={item.name + Math.random()}>
                            <GrayCard elevation={0}>
                                <CardActionArea>
                                    <BookCover
                                        component='img'
                                        image={item.img}
                                        height="270px"
                                        width='auto'
                                    />
                                    <CardContent>
                                        <CategoriesTypography variant='body1'>
                                            {item.category}
                                        </CategoriesTypography>
                                        <Typography variant='h6'>
                                            {item.name}
                                        </Typography> 
                                        <Typography variant='body2'>
                                            {item.author}
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