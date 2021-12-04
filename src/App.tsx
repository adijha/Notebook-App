import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Editor } from './components/Editor'

function render() {
	ReactDOM.render(
		<>
			<h1 className="header">💖 Hello World!</h1>

			<Editor />
		</>,

		document.body
	)
}

render()
