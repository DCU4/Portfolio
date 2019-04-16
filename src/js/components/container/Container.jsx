import React, { Component } from "react";
import ReactDOM from "react-dom";
import Nav from "../presentational/Nav.jsx";
import About from "../presentational/About.jsx";
import {Work} from "../presentational/Work.jsx";
class Container extends Component {
  constructor() {
    super();
    this.state = {
      // seo_title: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {

    return (
      <div className="container">
        <header>
		<h1 class="title"><a href="index.html">Dylan Connor</a></h1>
	</header>
        <Nav
          // onClick={this.handleChange}
        />
        <main>
        <Work
          title='J.Walls'
          link='https://dcu4.github.io/DCU4.github.io-J_Walls/'
          img='img/jwalls-gif.gif'
        />
        <About />
        </main>


      </div>



    );
  }
}
export default Container;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<Container />, wrapper) : false;