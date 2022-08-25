import { Alert, AlertTitle } from '@mui/material';
import { useAppSelector } from '../../hooks';

export const ServerErr = () => {
  const { error } = useAppSelector((state) => state);

  if (!error) {
    return null;
  }

  return (
    <Alert severity="error">
      <AlertTitle>
        Error
      </AlertTitle>
      {error}
      <p>
        Please, try again
      </p>
    </Alert>
  );
};
