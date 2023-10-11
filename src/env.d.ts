/// <reference types="astro/client" />

declare namespace App {
  import type { ApolloClient, NormalizedCacheObject } from '@apollo/client/core';

  export interface Locals {
    apolloClient: ApolloClient<NormalizedCacheObject>
  }
}
