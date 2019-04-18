import React, { Component } from 'react';

const active = 'selected';
const notActive = '';
export default class Nav extends Component {


  constructor(props) {
    super(props);
    this.state = {
      isActive: active,
      isNotActive: notActive
      //is is active, then add the class, if not isactive remove the class
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
        title: 'Home',
        link:'/home',
        class: 'link '+this.state.isActive
      },
      {
        title:'About',
        link:'/about',
        class: 'link '+this.state.isNotActive
      }

    ];
    const navItems = navList.map((items,i) =>
    <li key={i} className="menu-item ">
    <a  onClick={this.handleChange} data-text="_______" className={items.class}  href="#">{items.title}</a>
    </li>
    )
    return (
      <nav>
        <ul className="menu">
          {navItems}
        </ul>
      </nav>
    );
  }
}