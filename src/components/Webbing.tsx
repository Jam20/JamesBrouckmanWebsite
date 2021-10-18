import { Box } from '@material-ui/core'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './Webbing.scss'

interface State {
    dots: Array<{ x: number, y: number }>
}
export default class Webbing extends Component<{}, State> {

    constructor(props: {}) {
        super(props);
        this.state = { dots: this.getDots(300) }
    }


    render(): JSX.Element {
        let renderedDots = this.state.dots.map((dot): JSX.Element => this.getDot(dot.x, dot.y))
        let renderedLines: JSX.Element[] = [];
        for (let i = 0; i < this.state.dots.length - 1; i++) {
            for (let j = i + 1; i < this.state.dots.length; j++) {
                renderedLines.push(this.getLine(this.state.dots.at(i).x, this.state.dots[i].y, this.state.dots[j].x, this.state.dots[j].y))
            }
        }

        return (
            <div>

            </div>
        )
    }

    private getDots(numOfDots: number): Array<{ x: number, y: number }> {
        if (numOfDots == 1) return ([{
            x: Math.random() * 100,
            y: Math.random() * 100,
        }])
        let dots = this.getDots(numOfDots - 1);
        dots.push({
            x: Math.random() * 100,
            y: Math.random() * 100,
        })
        return dots

    }
    private getDot(x: number, y: number): JSX.Element {
        return (
            <span className={"dot"} style={{ left: x + 'vw', top: y + 'vh' }} />
        )
    }
    private getLine(x1: number, y1: number, x2: number, y2: number): JSX.Element {
        return (
            <span className={"line"} style={{ left: Math.min(x1, x2), width: Math.abs(x1 - x2), top: Math.min(y1, y2), height: Math.abs(y1 - y2) }} />
        )
    }
}