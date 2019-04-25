import React, { Component } from "react";
import ReactDOM from "react-dom";
import Nav from "../presentational/Nav.jsx";
import About from "../presentational/About.jsx";
import { Work } from "../presentational/Work.jsx";
// import esther from "./img/esther.gif";

class Container extends Component {
  constructor(props) {
    super(props);
    // this.showWork = this.showWork.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.state = {
      isAboutShowing: false
    };
  }

  handleShow() {
    this.setState(
      {
        isAboutShowing: this.state.isAboutShowing == false ? true : false
      },
      // () => console.log(this.state)
    );
  }

  render() {
    const isAboutShowing = this.state.isAboutShowing;

    return (
      <div className="container">
        <header>
          <h1 className="title">
            <a href="/">Dylan Connor</a>
          </h1>
        </header>
        <Nav onClick={this.handleShow} />

        {isAboutShowing ? (
          <About />
        ) : (
          <main>
            <Work
              title="Avnoe"
              link="https://kee-app.herokuapp.com/login"
              img={esther}
              info="A Node.js, JavaScript, and Canvas digital journal web app."
            />
            <Work
              title="J.Walls"
              link="https://dcu4.github.io/DCU4.github.io-J_Walls/"
              img="/img/jwalls-gif.gif"
              info="An HTML, SASS/SCSS, and JavaScript website for musician J.Walls (that's me!)."
            />
            <Work
              title="Esther Rivas"
              link="https://dcu4.github.io/DCU4.github.io-Esther-Rivas/index.html"
              img="/img/esther.gif"
              info="An HTML, SASS/SCSS, and JavaScript website for a friend who is a painter."
            />
          </main>
        )}
      </div>
    );
  }
}
export default Container;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<Container />, wrapper) : false;
