import React, { Component } from 'react';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false

    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    // let body = document.querySelector('body');
    // body.style.opacity = '0';
    this.props.navigateAnimation();
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
    <li onClick={items.class ? null : this.props.onClick} key={i} className="menu-item ">
      {this.props.darkMode ? (
        <a onClick={ items.class ? null : this.handleChange}  data-text="_______" className={items.class===true ? 'dark-mode link selected' : 'dark-mode link'}  href={`#${items.title.toLowerCase()}`}>{items.title}</a>) 
        : ( 
        <a onClick={ items.class ? null : this.handleChange}  data-text="_______" className={items.class===true ? 'link selected' : 'link'}  href={`#${items.title.toLowerCase()}`}>{items.title}</a>
      )}
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