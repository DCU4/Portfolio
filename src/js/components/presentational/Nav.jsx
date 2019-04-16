import React, { Component } from 'react';

export default class Nav extends Component {

    render() {
      const navList = [
        {
          title: 'Home',
          link:'/home'
        },
        {
          title:'About',
          link:'/about'
        }

      ];
      const navItems = navList.map((items) => <li className="menu-item"><a data-text="_______" className="link" id="work" href="#">{items.title}</a></li>)
      return (
        <nav>
          <ul className="menu">
            {navItems}
          </ul>
        </nav>
      );
    }
  }