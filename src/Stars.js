import React from 'react';
import {Query } from 'react-apollo';
import gql from 'graphql-tag';

const query = gql`
fragment fields on Repository {
description
name
url 
stargazers {
	totalCount
  }
}

query {
styledComponents: repository(owner: "styled-components", name: "styled-components") {
...fields
} 
emotion: repository(owner: "emotion-js", name: "emotion") {
 ...fields
} 
aphrodite: repository(owner: "khan", name: "aphrodite") {
  ...fields
} 
jss: repository(owner: "cssinjs", name: "jss") {
		...fields
} 
fela: repository(owner: "rofrischmann", name: "fela") {
  ...fields
} 
styledjsx: repository(owner: "zeit", name: "styled-jsx") {
  ...fields
} 
  styletron: repository(owner: "styletron", name: "styletron") {
  ...fields
} 
}
`


const Stars = () => (
	<Query query = {query}>

{({loading, error, data}) => 
{
	return Object.keys(data).map((key) => {
		const {name, description, url, stargazers} = data[key];
		return <div>
			<a href={url}>{name}</a>{stargazers.totalCount}
			<p>{description}</p>
			</div>
	})
}
}

</Query>
)

export default Stars;