import React, { Component } from 'react'

type CounterProps = {
    message:  string
}

type CounterState = {
    count: number
}

export default class CounterClass extends Component<CounterProps, CounterState> {
    state = {
        count: 0
    }

    handleClick = () => {
        this.setState((prevState)=>({count: prevState.count + 1}))
    }

  render() {
    return (
      <div>
        {this.props.message} {this.state.count}
        <button onClick={this.handleClick}>+</button>
      </div>
    )
  }
}
