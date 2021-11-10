import { Box } from '@material-ui/core'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { SocialIcon } from 'react-social-icons';
import './Contact.scss'

export default class Contact extends Component {

    render(): JSX.Element {
        return (
            <Box id = "ContactSection">
                <div className= "IconSection"> 
                    <SocialIcon className = "ContactIcon" id="LinkedInIcon" url="https://www.linkedin.com/in/james-brouckman/" />
                    <SocialIcon className = "ContactIcon" id="GithubIcon"url="https://github.com/Jam20" />
                </div>
                <a href="tel:616-560-7930" id="email">jcbrouck@mtu.edu</a>
                <a href="mailto:jcbrouck@mtu.edu" id="phone">(616)-560-7930</a>
                

            </Box>
        )
    }
}