import React, { Component } from 'react';

const active = 'selected';
const notActive = '';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: active,
      isNotActive: notActive

    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    this.setState({
      isActive: this.state.isNotActive,
      isNotActive: this.state.isActive

    }, () => console.log(this.state));
  }

  render() {

    const navList = [
      {
        title: 'Work',
        class: 'link '+this.state.isActive
      },
      {
        title:'About',
        class: 'link '+this.state.isNotActive
      }

    ];
    const navItems = navList.map((items,i) =>
    <li onClick={this.props.onClick} key={i} className="menu-item ">
      <a onClick={this.handleChange}  data-text="_______" className={items.class}  href="#">{items.title}</a>
    </li>
    )
    return (
      <nav>
        <ul className="menu">
          {navItems}
          {console.log(this.props)}
        </ul>
      </nav>
    );
  }
}