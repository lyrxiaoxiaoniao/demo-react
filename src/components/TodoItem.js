import React, { Component } from 'react'

class TodoItem extends Component {
  constructor(props){
    super(props)
    // 复杂组件提高性能 声明时绑定this
    this.handleClick = this.handleClick.bind(this)
  }
  render() {
    const { item } = this.props
    return (
      <li onClick={this.handleClick}>{item}</li>
    )
  }
  handleClick() {
    const { deleteItem, index } = this.props
    deleteItem(index)
  }
}

export default TodoItem