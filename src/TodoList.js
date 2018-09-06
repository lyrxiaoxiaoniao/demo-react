import React, { Component, Fragment } from 'react'
import TodoItem from './components/TodoItem';
class TodoList extends Component {
  constructor(props) {
    super(props)
    // 当组件的state或props发生改变的时候，render函数就会重新执行
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }
  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input
            id="insertArea"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
            {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }
  getTodoItem () {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          deleteItem={this.handleItemDelete}
          item={item}
          index={index}
          key={index}></TodoItem>
      )
    })
  }
  handleInputChange(e) {
    // this.setState({
    //   inputValue: e.target.value
    // })
    const value = e.target.value
    // 异步函数
    this.setState( () => {
      return {inputValue: value}
    })
  }
  handleBtnClick() {
    this.setState((prevState) => {
      return {
        list: [...prevState.list, prevState.inputValue],
        inputValue: ''
      }
    })
  }
  handleItemDelete(index) {
    // const list = [...this.state.list]
    // list.splice(index, 1)
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index,1)
      return {list}
    })
  }
}

export default TodoList
