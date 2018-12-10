import React from 'react'

const Star = props => (
  <svg style={{width: "200px", height: "200px"}} viewBox="0 0 748 711">
    <path
      fill="#FFF062"
      fillRule="nonzero"
      d="M374 563.366L143 710.944l68.973-265.298L.235 271.556l273.626-16.385L374 0l100.139 255.171 273.626 16.385-211.738 174.09L605 710.944z"
    />
	<text style={{fontSize: "60px", fontWeight: "bold"}} x="50%" y="55%" dominant-baseline="middle" text-anchor="middle">{props.children}</text>  
  </svg>
)

export default Star
