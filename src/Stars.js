import React from 'react';
import {Query } from 'react-apollo';
import gql from 'graphql-tag';
import { ResponsiveBar } from '@nivo/bar';

const query = gql`
fragment fields on Repository {
name 
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
radium: repository(owner: "FormidableLabs", name: "radium") {
  ...fields
} 
glamorous: repository(owner: "paypal", name: "glamorous") {
  ...fields
} 
glamor: repository(owner: "threepointone", name: "glamor") {
  ...fields
} 
}
`

const Stars = () => (
	<Query query = {query}>

{({loading, error, data}) => 
{
	if (loading) return <p>Loading data...</p>
	if (error) return <p>Error :(</p>
	 const sortedData = Object.keys(data).sort((a, b) => data[b].stargazers.totalCount - data[a].stargazers.totalCount );

	 let starsData = [];
	 sortedData.forEach(repoName => {
		 starsData.push({name: data[repoName].name, stars: data[repoName].stargazers.totalCount})
	 });


	 console.log(starsData);

	 return (<ResponsiveBar
	 data={starsData}
	 keys={["stars"]}
	 indexBy="name"
	 margin={{
		 "top": 40,
		 "right": 20,
		 "bottom": 60,
		 "left": 120
	 }}
	 padding={0.3}
	 layout="horizontal"
	 borderColor="inherit:darker(1.6)"
	 axisBottom={{
		 "tickSize": 4,
		 "tickPadding": 3,
		 "tickRotation": 0,
		 "tickValues": [0, 10000, 20000],
		 "legend": "Github stars",
		 "legendPosition": "middle",
		 "legendOffset": 36
	 }}
	 
	 />)
}
}

</Query>
)

export default Stars;