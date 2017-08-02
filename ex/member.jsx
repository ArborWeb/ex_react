import React from 'react'

export default props => (
	<div>{props.name + ' da Silva'} <strong>{props.lastname}</strong> - {' é o/a ' + props.position}</div>
)