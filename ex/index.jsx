import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
	<Family  lastname="Weissheimer">
		<Member name="Guilherme" />
		<Member name="Rafael" />
		<Member name="Julia" />
	</Family>
, document.getElementById('app'))