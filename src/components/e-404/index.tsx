import { Link } from '@mui/material';
import { PropsWithChildren } from 'react';

const E404 = (props: PropsWithChildren) => (
  <section>
    <h1>404. Page not found</h1>
    {props.children}
    <Link variant='h5' href="/search-result">Вернуться на главную</Link>
  </section>
);

export default E404;
