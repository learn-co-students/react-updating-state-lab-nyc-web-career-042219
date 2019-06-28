// Code DigitalClicker Component Here
import React from "react";

class DigitalClicker extends React.Component{

  state = {
    timesClicked: 0
  }

  updateClick= () =>{
    this.setState({timesClicked: this.state.timesClicked + 1})
  }

  render(){
    return (
      <div>
        <button onClick={this.updateClick} >
          {this.state.timesClicked}
        </button>
      </div>
    )

  }

}

export default DigitalClicker;
