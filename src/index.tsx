import React from 'react'
import ReactDOM from 'react-dom'
import TopBar from './components/TopBar'
import './variables.scss'

ReactDOM.render(
    <div id = "fullPage">
    <TopBar/>
    <h1>Hello React!</h1>
    </div>,
    document.getElementById('app-root'),
)
