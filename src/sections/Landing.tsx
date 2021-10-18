import { Box } from '@material-ui/core'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Webbing from '../components/Webbing'
import './Landing.scss'

export default class Landing extends Component {

    render(): JSX.Element {
        return (
            <Box id="boxContainer">
                <h1 >James Brouckman</h1>
                <Webbing />
            </Box>
        )
    }
}