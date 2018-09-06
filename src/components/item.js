import React, { Component } from 'react'

class Item extends Component {
  render() {
    const {item, index} = this.props
    return (
      <li dangerouslySetInnerHTML={{__html: item}}></li>
    )
  }
}

export default Item