import React, { Component } from 'react'

class Button extends Component {
  render () {
    const props = this.props
    return (
      <div>
        <button className={props.onClass} onClick={props.onBtnClick}>{props.text}</button>
      </div>
    )
  }
}

export default Button