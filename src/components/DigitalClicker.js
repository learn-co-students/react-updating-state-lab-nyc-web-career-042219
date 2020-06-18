  import React, {Component} from 'react';


  export default class DigitalClicker extends Component {

      state = {
        timesClicked: 0,
        isClicked: 'Click'
      }

      handleClick = () => {
        this.setState({
          timesClicked: this.state.timesClicked + 1,
          isClicked: this.state.timesClicked + 1
        })
      }

      render() {
        console.log(this.state)
        return(
          <button onClick={this.handleClick}>{this.state.isClicked}</button>
        )
      }
  }
