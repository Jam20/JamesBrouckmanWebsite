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
                    <h3>Milwaukee Electrical Tool - Firmware DevOps Intern (Summer 2021)</h3>
                    <ul className = "ExperienceList">
                        <li>Gained Skills in Continuous Integration and Delivery</li>
                        <li>Became Adept at Agile Software Development in a Real World Environment</li>
                        <li>Assisted in Leading a Large Scale Toolchain Migration</li>
                        <li>Developed a Productivity Improvement that was Effective Across the Business</li>
                    </ul>
                </LogoCard>
            </Box>
        )
    }
}