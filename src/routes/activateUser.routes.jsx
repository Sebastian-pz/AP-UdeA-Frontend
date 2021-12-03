import Dashboard_activateUser from '../components/admin_activateuser.commponents';
import client from '../apollo/apollo.client';
import {ApolloProvider} from "@apollo/client";

const activateUser = () => {
    return (
        <ApolloProvider client={client}>
            <Dashboard_activateUser/>
        </ApolloProvider>
    )

}
 
export default activateUser;