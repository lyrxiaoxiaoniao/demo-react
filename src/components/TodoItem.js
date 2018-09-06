import React, { Component } from 'react'
import PropTypes from 'prop-types'


class TodoItem extends Component {
  constructor(props){
    super(props)
    // 复杂组件提高性能 声明时绑定this 避免函数声明影响组件重绘
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
TodoItem.propTypes = {
  item: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func
}
export default TodoItem