import React from 'react';
import {Query } from 'react-apollo';
import gql from 'graphql-tag';
import { ResponsiveBar } from '@nivo/bar';

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
	 const sortedData = Object.keys(data).sort((a, b) => data[b].stargazers.totalCount - data[a].stargazers.totalCount );

	 let starsData = [];
	 sortedData.forEach(repoName => {
		 starsData.push({name: repoName, stars: data[repoName].stargazers.totalCount})
	 });


	 console.log(starsData);

	 return (<ResponsiveBar
	 data={starsData}
	 keys={["stars"]}
	 indexBy="name"
	 margin={{
		 "top": 50,
		 "right": 130,
		 "bottom": 50,
		 "left": 60
	 }}
	 padding={0.3}
	 layout="horizontal"
	 borderColor="inherit:darker(1.6)"
	 axisBottom={{
		 "tickSize": 5,
		 "tickPadding": 5,
		 "tickRotation": 0,
		 "legend": "Github stars",
		 "legendPosition": "middle",
		 "legendOffset": 32
	 }}
	 
	 legends={[
		 {
			 "dataFrom": "keys",
			 "anchor": "bottom-right",
			 "direction": "column",
			 "justify": false,
			 "translateX": 120,
			 "translateY": 0,
			 "itemsSpacing": 2,
			 "itemWidth": 100,
			 "itemHeight": 30,
			 "itemDirection": "left-to-right",
			 "itemOpacity": 0.85,
			 "symbolSize": 20,
			 "effects": [
				 {
					 "on": "hover",
					 "style": {
						 "itemOpacity": 1
					 }
				 }
			 ]
		 }
	 ]}
	 />)
}
}

</Query>
)

export default Stars;