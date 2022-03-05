import { useMemo } from 'react'

import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client'

let appoloClient: ApolloClient<NormalizedCacheObject>

function createAppoloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: 'http://localhost:1337/graphql'
    }),
    cache: new InMemoryCache()
  })
}

export function initializeApollo(initialState = {}) {
  const apolloClientGlobal = appoloClient ?? createAppoloClient()

  if (initialState) {
    apolloClientGlobal.cache.restore(initialState)
  }

  if (typeof window === 'undefined') return apolloClientGlobal
  appoloClient = appoloClient ?? apolloClientGlobal

  return appoloClient
}

export function useApollo(initialState = {}) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
