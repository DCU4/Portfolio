import React, { Component } from "react";
import ReactDOM from "react-dom";
import Nav from "../presentational/Nav.jsx";
import About from "../presentational/About.jsx";
import { Work } from "../presentational/Work.jsx";
class Container extends Component {
  constructor() {
    super();
    this.state = {
      aboutShowing: false

    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      aboutShowing: true
      // change class name??
    });
    console.log(this.state);
  }
  render() {

    return (
      <div className="container">
        <header>
          <h1 className="title"><a href="/">Dylan Connor</a></h1>
        </header>
        <Nav
          // onClick={this.handleChange}
          className="link "
          changeDisplay="test"

        />
        <About />
        <main>
          <Work
            title='J.Walls'
            link='https://dcu4.github.io/DCU4.github.io-J_Walls/'
            img='img/jwalls-gif.gif'
          />
          <Work
            title='Esther Rivas'
            link='https://dcu4.github.io/DCU4.github.io-Esther-Rivas/index.html'
            img='img/esther.gif'
          />
          <Work
            title='Avnoe'
            link='https://kee-app.herokuapp.com/login'
            img='img/drawing-upload-final.gif'
          />
        </main>




      </div>



    );
  }
}
export default Container;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<Container />, wrapper) : false;