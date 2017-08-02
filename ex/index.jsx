import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
	<Family  lastname="Weissheimer">
		<Member name="Guilherme" position="Pai" />
		<Member name="Rafael" position="Filho" />
		<Member name="Julia" position="Mãe"/>
	</Family>
, document.getElementById('app'))