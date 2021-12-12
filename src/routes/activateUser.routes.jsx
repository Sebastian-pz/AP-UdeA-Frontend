import DashboardActivateUser from '../components/activateUser/admin_activateuser.component';
import client from '../apollo/apollo.client';
import {ApolloProvider} from "@apollo/client";

const activateUser = () => {
    return (
        <ApolloProvider client={client}>
            <DashboardActivateUser/>
        </ApolloProvider>
    )

}
 
export default activateUser;