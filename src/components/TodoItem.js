import React, { Component } from 'react'
import PropTypes from 'prop-types'


class TodoItem extends Component {
  constructor(props){
    super(props)
    // 当父组件的render函数被执行时，它的子组件的render函数都将重新执行
    // 再构造函数函数中声明函数 为复杂组件提高性能 声明时绑定this 避免函数声明影响组件重绘
    this.handleClick = this.handleClick.bind(this)
  }
  render() {
    const { item, test } = this.props
    return (
      <li onClick={this.handleClick}>{test} - {item}</li>
    )
  }
  handleClick() {
    const { deleteItem, index } = this.props
    deleteItem(index)
  }
}
TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  item: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func
}
TodoItem.defaultProps = {
  test: 'hello world'
}
export default TodoItem