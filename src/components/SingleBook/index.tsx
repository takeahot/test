import { 
    Grid,
    Paper, 
    Typography , 
    Breadcrumbs, 
    Link,
    Box,
} from "@mui/material";
import book1 from '../../img/book1.png'

interface apiResultItem {
        img: string;
        category: string;
        name: string;
        author: string;
}

const SingleBook = (props: {apiResultItem: apiResultItem}) => {
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
                        src={props.apiResultItem.img}
                        width='55%'
                        boxShadow={22}
                    >

                    </Box>
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
                            [props.apiResultItem.category].map(item => {
                                return (
                                    <Link 
                                        href={item} 
                                        underline='hover' 
                                        color='inherit' 
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
                            {props.apiResultItem.name}
                        </Typography>
                    </Grid>
                    <Grid item pt={1}>
                        <Link 
                            variant='body2' 
                            color='inherit' 
                            underline='always'
                            pt={20}
                        >
                            {props.apiResultItem.author}
                        </Link>
                    </Grid>
                    <Grid item pt={3} pb={8}>
                        <Paper>
                            <Typography p={2}>
                                {props.apiResultItem.name}
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
{/* 
            <div style={{display:'flex', flexDirection:'row', minHeight: '800px'}}>
                <div style={{display: 'flex', width: '40%', alignItems:'center'}}>
                    <img src={book1} alt="" style={{width: '40%'}}/>
                </div>
                <div>

                </div>

            </div> */}
        </>
    )
}

export default SingleBook;