import { Box, Card } from "@material-ui/core";
import React from "react";
import { Component } from "react";
import "./LogoCard.scss"


interface props {
    id?: string
    imgURL: string
}
export default class LogoCard extends Component<props,{}> {

    render(): JSX.Element {
        return (
            <Card id = {this.props.id} className="LogoCard">
                <img src={this.props.imgURL}/>
                {this.props.children}
            </Card>
        )
    }
}