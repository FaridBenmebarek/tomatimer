import React, { Component } from 'react'
import Button from './Button'

class ButtonGroup extends Component {
  render () {
    const props = this.props
    return (
        <div className="btn-group">
          <Button text="Start" onBtnClick={props.onStart} onClass="btn btn-success ml-3"/>
          <Button text="Stop" onBtnClick={props.onStop} onClass="btn btn-danger ml-3"/>
          <Button text="Reset" onBtnClick={props.onReset} onClass="btn btn-secondary ml-3"/>
        </div>
    )
  }
}

export default ButtonGroup