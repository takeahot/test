import { styled } from '@mui/system';
import { OutlinedInput, Paper, Typography } from '@mui/material';
import img from '../../img/book.jpg';

export const HomePaper = styled(Paper)`
    color: black;
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
                url(${img}) center / cover;
`;
export const MainHeader = styled(Typography)`
    margin-left: auto;
    margin-right: auto;
    color: white;
`;
export const MainInput = styled(OutlinedInput)`
    label ~ & {
        margin-top: 10px;
    };
`;
