import React, { Component, Fragment } from 'react';
import TodoItem from './components/TodoItem';
import { Input  } from 'antd'
const Search = Input.Search;
class TodoList extends Component {
  constructor(props) {
    super(props);
    // 当组件的state或props发生改变的时候，render函数就会重新执行
    this.state = {
      inputValue: '',
      list: []
    };
    // 再构造函数函数中声明函数 为复杂组件提高性能 声明时绑定this 避免函数声明影响组件重绘
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }
  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容</label>
          {/* <Input
            id="insertArea"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          /> */}
          <Search
            id="insertArea"
            placeholder="输入内容"
            enterButton="提交"
            size="large"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            onSearch={this.handleBtnClick}
          />
          {/* <Button type="primary" onClick={this.handleBtnClick}>提交</Button> */}
        </div>
        <ul>{this.getTodoItem()}</ul>
      </Fragment>
    );
  }
  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          deleteItem={this.handleItemDelete}
          item={item}
          index={index}
          key={index}
        />
      );
    });
  }
  handleInputChange(e) {
    const value = e.target.value;
    // setState 异步函数 先声明value赋值然后使用
    this.setState(() => {
      return { inputValue: value };
    });
  }
  handleBtnClick() {
    this.setState(prevState => {
      return {
        list: [...prevState.list, prevState.inputValue],
        inputValue: ''
      };
    });
  }
  handleItemDelete(index) {
    this.setState(prevState => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return { list };
    });
  }
}

export default TodoList;
