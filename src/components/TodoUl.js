import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';

class TodoUl extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    const { list } = this.props;
    return (
      <List
        bordered
        dataSource={list}
        onClick={this.handleClick}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
    );
  }

  handleClick() {
    const { deleteItem } = this.props;
    deleteItem();
  }
}
TodoUl.propTypes = {
  list: PropTypes.array
};
TodoUl.defaultProps = {
  list: []
};
export default TodoUl;
