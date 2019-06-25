import React from 'react'

class DigitalClicker extends React.Component {
  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
  }

  clickHandler = () => {
    let newClicked = this.state.timesClicked + 1
    this.setState({
      timesClicked: newClicked
    })
  }

  render() {
    return <button
    onClick={this.clickHandler}
    >{this.state.timesClicked}</button>
  }


}

export default DigitalClicker
