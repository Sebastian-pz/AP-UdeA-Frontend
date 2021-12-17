import {
    ApolloClient,
    InMemoryCache
} from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://localhost:3001/graphQL',
    headers:{
        "Authorization":`${window.localStorage.getItem('authorization')}`
    },
    cache: new InMemoryCache()
})

export default client;