import { Card , CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/system';

export const BookCover = styled(CardMedia)`
    background-size: contain;
    background-position: center center;
    width: auto;
    margin: 0 auto;
    padding: 30px 0 10px;
` as typeof CardMedia;

export const GrayCard = styled(Card)`
    background-color: whitesmoke;
    height: 100%;
    & .MuiCardActionArea-root {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: space-between;
        height: 100%;
    }	
    & .MuiCardContent-root {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: center;
        flex-grow: 1;

    } 
` as typeof Card;

export const CategoriesTypography = styled(Typography)`
    color: darkgray;
    text-decoration: underline;
`;
