import React, { Component } from 'react'

class Timer extends Component {
  state = {
    duration: 5,
    handle: 0
  }

  componentDidMount () {
    const handle = setInterval(() => {
      this.count()
    }, 1000)

    this.setState({
      handle: handle
    })
  }

  count = () => {
    this.setState({
      duration: this.state.duration - 1
    })
    if (this.state.duration === 0){
      clearInterval(this.state.handle)
    }
  }

  render () {
    return (
      <div>
        <h2>Pomodoro</h2>
        {this.state.duration}
      </div>
    )
  }
}

export default Timer