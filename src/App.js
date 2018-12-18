import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import Stars from './Stars';

const client = new ApolloClient({
	uri: "https://api.github.com/graphql",
	headers: {Authorization: "bearer f580cecfa83440a42e934978a0020723463e10fc"}
});




class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
		<div className="App">
		<Stars/>
      	</div>
	  </ApolloProvider>
    );
  }
}

export default App;
