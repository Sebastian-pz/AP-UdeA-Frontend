import CreateProject from '../components/createProject.commponents'
import client from '../apollo/apollo.client';
import {ApolloProvider} from "@apollo/client";

const newProject = () => {
    return (
        <ApolloProvider client={client}>
            <CreateProject/>
        </ApolloProvider>
    )

}
 
export default newProject;