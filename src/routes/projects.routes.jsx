import Projects from '../components/projects.components';
import client from '../apollo/apollo.client';
import {ApolloProvider} from "@apollo/client";

const projects = () => {
    return (
        <ApolloProvider client={client}>
            <Projects/>
        </ApolloProvider>
    )
}

export default projects;