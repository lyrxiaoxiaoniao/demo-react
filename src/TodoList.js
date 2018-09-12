import React, { Component, Fragment } from 'react';
import { Input,  List } from 'antd';
import { connect } from 'react-redux';
import { getTitle } from './store/actions'
const Search = Input.Search;
class TodoList extends Component {
  constructor(props) {
    super(props);
    // 当组件的state或props发生改变的时候，render函数就会重新执行
    this.state = {
      inputValue: '',
      list: [1,2]
    };
    // 再构造函数函数中声明函数 为复杂组件提高性能 声明时绑定this 避免函数声明影响组件重绘
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    // this.handleItemDelete = this.handleItemDelete.bind(this);
  }
  render() {
    return (
      <Fragment>
        <div onClick={this.props.onGetTitle.bind(this,'嘻嘻')}>{this.props.title}</div>
        <div>
          <Search
            id="insertArea"
            placeholder="输入内容"
            enterButton="提交"
            size="large"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            onSearch={this.handleBtnClick}
          />
        </div>
        <List
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => <List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>}
        />
      </Fragment>
    );
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
const mapStateToProps = (state) => {
  return {
    title: state.title
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onGetTitle: (title) => {
      dispatch(getTitle(title))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
