import React, { Component } from 'react'
import ButtonGroup from './ButtonGroup'
import { toast } from 'react-toastify';


class Timer extends Component {

  state = {
    initialValue: 10,
    duration: 10,
    message: '',
    handle: 0
  }

  notify = (text, type) => {
    toast[type](text, {autoClose: 1500})
  }

  prependZero = value => {
    return value < 10 ? "0" + value.toString() : value.toString()
  }

  formatDuration = () => {
    const minutes = Math.floor(this.state.duration / 60)
    const secondes = Math.floor(this.state.duration % 60)
    return `${this.prependZero(minutes)}:${this.prependZero(secondes)}`
  }

  componentDidMount () {
    this.setState({
      initialValue: parseInt(this.props.duration, 10) * 60,
      duration: parseInt(this.props.duration, 10) * 60
    })
  }

  componentWillUnmount () {
    this.clean()
  }

  count = () => {
    this.setState({
      duration: this.state.duration - 1
    })
    if (this.state.duration === 0) {
      this.clean()
    }
  }
  clean = (message) => {
    clearInterval(this.state.handle)

    this.setState({
      message: message
    })
  }

  start = () => {
    const handle = setInterval(() => {
      this.count()
    }, 1000)

    this.setState({
      handle: handle,
      message: ''
    })
  }

  stop = () => {
    this.notify('Arrêt du compteur', 'warn')
    this.clean()
  }

  reset = () => {
    this.notify('Réinitialisation du compteur', 'error')
    this.clean()
    this.setState({
      duration: this.state.initialValue
    })
  }

  render () {
    const props = this.props
    return (
      <div>
        <h2>{props.title}</h2>
        <h3>{this.state.message}</h3>
        <h4>Durée | {this.formatDuration()}</h4>
        <ButtonGroup onStart={this.start} onStop={this.stop} onReset={this.reset}/>
      </div>
    )
  }
}

export default Timer