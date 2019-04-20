import React, { Component } from 'react';

const active = ' selected';
const notActive = 'link';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
      // isNotActive: notActive

    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    this.setState({
      isActive: this.state.isActive ? false : true
      
    });
  }

  render() {

    const navList = [
      {
        title: 'Work',
        class: !this.state.isActive 
      },
      {
        title:'About',
        class: this.state.isActive
      }

    ];
    const navItems = navList.map((items,i) =>
    <li onClick={items.class === true ? null : this.props.onClick} key={i} className="menu-item ">
      <a onClick={ items.class === true ? null : this.handleChange}  data-text="_______" className={'link'+(items.class === true ? ' selected' : '')}  href="#">{items.title}</a>
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