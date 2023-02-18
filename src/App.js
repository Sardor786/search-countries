import Views from "./views";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import "./styles/index.scss";
import { HomeProvider } from "./views/app-views/context/homeContext";

const url = "https://countries.trevorblades.com/graphql";

const client = new ApolloClient({
	uri: url,
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<HomeProvider>
				<Views />
			</HomeProvider>
		</ApolloProvider>
	);
}

export default App;
