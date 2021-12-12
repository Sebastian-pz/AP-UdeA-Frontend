import SingUp from '../components/createuser/singUp.component';
import client from '../apollo/apollo.client';
import {ApolloProvider} from "@apollo/client";

const createUser = () => {
    return (
        <ApolloProvider client={client}>
            <SingUp/>
        </ApolloProvider>
    )

}
 
export default createUser;