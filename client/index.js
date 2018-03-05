import ReactDOM from 'react-dom'
import React from 'react'
require("./index.html")
import App from './components/App'
require('./sass/main.scss')

ReactDOM.render(
	<App/>,
	document.getElementById('root')
)
