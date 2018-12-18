import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const data = [
	{name: "Styled Components",
	stars: 20967},
	{name: "Radium",
	stars: 6716},
	{name: "Emotion",
	stars: 6246},
	{name: "Aphrodite",
	stars: 4460},
	{name: "JSS",
	stars: 4380},
	{name: "Styled JSX",
	stars: 3901},
	{name: "Glamorous",
	stars: 3774},
	{name: "Glamor",
	stars: 3375},
	{name: "Styletron",
	stars: 2622},
	{name: "Fela",
	stars: 1504},
]

const Stars = () => {
	return <ResponsiveBar
	data={data}
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
	
	/>

}

export default Stars;