import client from '../apollo/apollo.client';
import {ApolloProvider} from "@apollo/client";
import React from "react";
import UserComponent from "../components/users/user.component";

const User = () => {
    return (
        <ApolloProvider client={client}>
            <UserComponent/>
        </ApolloProvider>
    )
}

export default User;