import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = new HttpLink({
  uri: 'https://learn.reboot01.com/api/graphql-engine/v1/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('authToken');
  
  console.log('Apollo authLink - Token exists:', !!token);
  
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: from([authLink, httpLink]),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});

export const resetApolloCache = async () => {
  try {
    await client.resetStore();
    console.log('Apollo cache reset successfully');
  } catch (error) {
    console.error('Error resetting Apollo cache:', error);
  }
};

// Export function to clear cache completely (use only on logout)
export const clearApolloCache = async () => {
  try {
    await client.clearStore();
    console.log('Apollo cache cleared completely');
  } catch (error) {
    console.error('Error clearing Apollo cache:', error);
  }
};

export default client;