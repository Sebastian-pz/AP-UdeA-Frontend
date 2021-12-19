import {
    ApolloClient,
    InMemoryCache
} from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://back-c4.herokuapp.com/graphQL',
    headers:{
        "Authorization":`${window.localStorage.getItem('authorization')}`
    },
    cache: new InMemoryCache()
})

export default client;
