import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { defineMiddleware, sequence } from 'astro/middleware';

const apolloMiddleware = defineMiddleware((context, next) => {
  context.locals.apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
  });

  return next();
});

export const onRequest = sequence(apolloMiddleware);
