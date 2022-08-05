const paramsToObj = (searchParams: URLSearchParams) => {
  let params: {[key: string]: string} = {};
  for ( const entry of Array.from(searchParams.entries())) {
      params[entry[0]] = entry[1];
  };
  return params;
}

export default paramsToObj;