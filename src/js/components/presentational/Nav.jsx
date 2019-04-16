import React, { Component } from 'react';

export default class Nav extends Component {

    render() {
      const navList = [
        // {
        //   title: 'Home',
        //   link:'/home'
        // },
        // {
        //   title:'About',
        //   link:'/about'
        // }

      ];
      const navItems = navList.map((items) =>
      <li className="menu-item "><a onClick={this.handleChange} data-text="_______" className="link" id="work" href="#">{items.title}</a></li>)
      return (
        <nav>
          <ul className="menu">
            {navItems}
            {console.log(this.state, this.props)}
          </ul>
        </nav>
      );
    }
  }