import { Box } from '@material-ui/core'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import LogoCard from '../components/LogoCard'
import './Experience.scss'

export default class Experience extends Component {

    render(): JSX.Element {
        return (
            <Box id="ExperienceBox">
                <h1 id="ExperienceTitle">Experience </h1>
                <LogoCard id = "MilwaukeeTool" imgURL= "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Milwaukee_Logo.svg/1920px-Milwaukee_Logo.svg.png">
                    Test
                </LogoCard>
            </Box>
        )
    }
}