// Code DigitalClicker Component Here

import React from 'react';

export default class DigitalClicker extends React.Component{
    state ={
        timesClicked: 0
    }
    
    incrementClicks = () => {
        return this.setState((state, props) => {

           return{
               timesClicked: state.timesClicked + 1
           } 
        })
    }
    render(){
        return <button onClick={this.incrementClicks}>{this.state.timesClicked}</button>
    }
}