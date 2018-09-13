import React, { Component, Fragment } from 'react';
import { Input,  List, Button } from 'antd';
import { connect } from 'react-redux';
import { getTitle } from './store/actions';
import TodoTitle from './components/TodoTitle';
import * as actionTypes from './store/actionTypes';
import './redux.css'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.handleBtnClick = this.handleBtnClick.bind(this)
  }
  render() {
    const { title, list, inputValue, onChangeValue } = this.props
    return (
      <Fragment>
        <div className='app'>
          <TodoTitle title={title}></TodoTitle>
          <Input value={inputValue} onChange={onChangeValue} className='top' placeholder="todolist" />
          <Button onClick={this.handleBtnClick}>提交</Button>
          <List
            className='toplist'
            bordered
            dataSource={list}
            renderItem={(item, index) => (<List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>)}
          />
        </div>
      </Fragment>
    );
  }
  handleBtnClick() {
    const { list, onBtnClick, inputValue } = this.props
    onBtnClick([...list, inputValue])
  }
  handleItemDelete(index) {
    const { list, onItemDelete } = this.props
    list.splice(index, 1)
    onItemDelete(list)
  }
}
const mapStateToProps = (state) => {
  return {
    title: state.title,
    inputValue: state.inputValue,
    list: state.list || []
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onGetTitle: (title) => {
      dispatch(getTitle(title))
    },
    onChangeValue: (e) => {
      const value = e.target.value
      dispatch({type: actionTypes.CHANGE_INPUTVALUE, inputValue: value})
    },
    onBtnClick: (list) => {
      dispatch({type: actionTypes.HANDLE_BTN_CLICK, list})
    },
    onItemDelete: (list) => {
      dispatch({type: actionTypes.HANDLE_CLICK_DELETE, list})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
