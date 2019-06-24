import React, { Component } from 'react';

export default class DigitalClicker extends React.Component {

    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    clicked = () => {
        let newTimesClicked = this.state.timesClicked + 1
        this.setState({
            timesClicked: newTimesClicked
        })
    }

    render() {
        return(
            <button onClick={this.clicked}>
                {this.state.timesClicked}
            </button>               
        )
    }
}