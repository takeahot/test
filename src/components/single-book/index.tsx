import { 
    Grid,
    Paper, 
    Typography , 
    Breadcrumbs, 
    Link,
    Box,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks";

import E404 from "../e-404"

const SingleBook = () => {
    console.log('render single book');
    const searchResult = useAppSelector((state) => state.searchResult)
    const params = useParams();
    if (params.bookId === undefined) return <E404 />

    const getBookItem = (id: string) => searchResult.items.find(item => item.id === id)
        
    const bookData = getBookItem(params.bookId);
    if (bookData === undefined) return <E404 />

    return (
        <>
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
                        src={bookData.volumeInfo.imageLinks ? bookData.volumeInfo.imageLinks.thumbnail : '/img/vinyl.png'}
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
                    <Grid item pt={5}  >
                        <Breadcrumbs sx={{}}>
                        {
                            bookData.volumeInfo.categories.map(item => {
                                return (
                                    <Link 
                                        href={item} 
                                        underline='hover' 
                                        color='inherit' 
                                        key={item}
                                    >
                                        {item}
                                    </Link>
                                )
                            })
                        }
                        </Breadcrumbs>
                    </Grid>
                    <Grid item pt={4}>
                        <Typography variant='h5' >
                            {bookData.volumeInfo.title}
                        </Typography>
                    </Grid>
                    <Grid item pt={1}>
                        <Link 
                            href={`/search-result?authors=${bookData.volumeInfo.authors[0]||""}`}
                            variant='body2' 
                            color='inherit' 
                            underline='always'
                        >
                            {bookData.volumeInfo.authors.join(' , ')}
                        </Link>
                    </Grid>
                    <Grid item pt={3} pb={8}>
                        <Paper>
                            <Typography p={2}>
                                {bookData.searchInfo.textSnippet }
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default SingleBook;