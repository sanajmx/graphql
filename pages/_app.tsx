/*

Part of Next.JS app that integrates apollo client to work with graphql API 

*/

import '../styles/globals.css'
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo-client";
import type { AppProps } from "next/app";
import { Toaster } from "@/components/ui/toaster"


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
            <Toaster /> 
    </ApolloProvider>
  );
}


/*
 we need myApp to render the components in each page 

 difference between this and router in next.js -> router navigates through each page.. 

 myApp loads the components in each page 

 basically before showing any page, myApp loads it in stuff it needs like ApolloProvider and then we load the page inside ...

 so we can call queries from any page after this bc each page has ApolloProvider.. 
*/