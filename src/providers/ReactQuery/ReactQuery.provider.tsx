import React, { FunctionComponent } from 'react';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';

const queryCache = new QueryCache();

export const ReactQueryProvider: FunctionComponent = ({ children }) => {
  return <ReactQueryCacheProvider queryCache={queryCache}>{children}</ReactQueryCacheProvider>;
};
