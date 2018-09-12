import React, { Component, Fragment } from 'react';
import { Input,  List, Button } from 'antd';
import { connect } from 'react-redux';
import { getTitle } from './store/actions';
import TodoTitle from './components/TodoTitle';
import './redux.css'

class TodoList extends Component {

  render() {
    const { title, list, inputValue } = this.props
    return (
      <Fragment>
        <div className='app'>
          <TodoTitle title={title}></TodoTitle>
          <Input value={inputValue} className='top' placeholder="todolist" /> <Button>提交</Button>
          <List
            className='toplist'
            bordered
            dataSource={list}
            renderItem={item => (<List.Item>{item}</List.Item>)}
          />
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    title: state.title,
    inputValue: state.inputValue,
    list: state.list
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
