import request, { AxiosError } from 'axios';
import { AxiosResponse } from 'axios';
import { StatusCodes } from 'http-status-codes';
import { store } from '../store';
import { setError } from '../store/action';
import { clearErrorAction } from '../store/api-actions';
import { ErrorData } from '../types/serverAnswer';

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true,
};

const shouldDisplayError = (response: AxiosResponse) => StatusCodeMapping[response.status];


export const processErrorHandle = (err: any): void => {

  if (!request.isAxiosError(err)) {
    throw err;
  }

  const error = err as AxiosError<ErrorData>;
  let message = '';

  if (
    error.response
    && shouldDisplayError(error.response)
  ) {
    message = error.response.data.error.message;
  } else if (error.response && error.code === 'ERR_NETWORK') {
    message = error.message;
  }
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
