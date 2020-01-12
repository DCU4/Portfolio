import React, { Component } from "react";
import ReactDOM from "react-dom";
import Nav from "../presentational/Nav.jsx";
import About from "../presentational/About.jsx";
import { Work } from "../presentational/Work.jsx";

class Container extends Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleMode = this.handleMode.bind(this);
    this.state = {
      isAboutShowing: false,
      darkMode: false
    };
    
  }

  handleShow() {
    this.setState({
      isAboutShowing: this.state.isAboutShowing == false ? true : false
    });
  }

  handleMode() {
    this.setState({
      darkMode: this.state.darkMode == false ? true : false
    });
  }

  handleMove = e => {
    
    // console.log(e.target.style);
    let position = e.target.getBoundingClientRect();
    // console.log(e.target.style);
    e.target.style.transform = `skewY(${position.x}px)`;
    // console.log(e.target.style.transform);
    const container = document.querySelector('body');
    const inner = document.querySelector(".grid");

    // console.log(container);
    // Mouse 
    let mouse = {
      _x: 0,
      _y: 0,
      x: 0,
      y: 0,
      updatePosition: function(event) {
        let e = event || window.event;
        this.x = e.clientX - this._x;
        this.y = (e.clientY - this._y) * -1;
      },
      setOrigin: function(e) {
        this._x = e.offsetLeft + Math.floor(e.offsetWidth/2);
        this._y = e.offsetTop + Math.floor(e.offsetHeight/2);
      },
      show: function() { return '(' + this.x + ', ' + this.y + ')'; }
    }

    mouse.setOrigin(container);
    

    let counter = 0;
    let updateRate = 10;
    let isTimeToUpdate = function() {
      return counter++ % updateRate === 0;
    };


    let update = function(event) {
      mouse.updatePosition(event);
      console.log(mouse,inner.offsetHeight);
      updateTransformStyle(
        (mouse.y / inner.offsetHeight/2).toFixed(2),
        (mouse.x / inner.offsetWidth/2).toFixed(2)
      );
    };
    
    let updateTransformStyle = function(x, y) {
      // let style = "skewX(" + ( y*50) + "deg) skewY(" +x*25  + "deg)";
      let style = `translate(${y*250}px, ${x*250}px ) skew(${y*50}deg, ${x*25}deg)`;
      // let style = `rotate(${x/y}deg)`;
      inner.style.transform = style;
      inner.style.webkitTransform = style;
      inner.style.mozTransform = style;
      inner.style.msTransform = style;
      inner.style.oTransform = style;
    };
    if (isTimeToUpdate()) {
      update(e);
    }

  }





  render() {

    const isAboutShowing = this.state.isAboutShowing;
    const darkMode = this.state.darkMode;
    darkMode ? document.body.classList = 'dark-mode' : document.body.classList =  '';
    

    

    return (
      <div  onMouseMove={this.handleMove}  className={darkMode ? 'container dark-mode' : 'container'}>

        <header>
          <h1 className="title">
            <a className={darkMode ? ' dark-mode' : ''} href="/">Dylan Connor</a>
          </h1>
          <Nav onClick={this.handleShow} darkMode={darkMode ? 'dark-mode' : ''} />
          <a className={darkMode ? 'dark-mode color-pref' : ' color-pref'} data-text="__________________" onClick={this.handleMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</a>
        
        </header>
        
        {isAboutShowing ? (
          <main className="aboutShowing">
             <div  className={darkMode ? 'grid dark-mode' : 'grid'}>
              <span className="grid-item"></span>
              <span className="grid-item"></span>
              <span className="grid-item"></span>
              <span className="grid-item"></span>
              <span className="grid-item"></span>
              <span className="grid-item"></span>

            </div>
            <About
              darkMode={darkMode ? 'dark-mode' : ''}
            />
          </main>

        ) : (
          <main className="workShowing">
             <div className={darkMode ? 'grid dark-mode' : 'grid'}>
          <span className="grid-item"></span>
          <span className="grid-item"></span>
          <span className="grid-item"></span>
          <span className="grid-item"></span>
          <span className="grid-item"></span>
          <span className="grid-item"></span>
          <span className="grid-item"></span>
          <span className="grid-item"></span>
          <span className="grid-item"></span>
          <span className="grid-item"></span>
          <span className="grid-item"></span>
          <span className="grid-item"></span>

        </div>
            <Work
              title="Avnoe"
              link="https://kee-app.herokuapp.com/login"
              img="img/drawing-upload-final.gif"
              info="A Node.js, JavaScript, and Canvas digital journal web app."
              darkMode={darkMode ? 'dark-mode' : ''}
            />
            <Work
              title="J.Walls"
              link="https://dcu4.github.io/DCU4.github.io-J_Walls/"
              img="img/jwalls-gif.gif"
              info="An HTML, SASS/SCSS, and JavaScript website for musician J.Walls (that's me!)."
              darkMode={darkMode ? 'dark-mode' : ''}
            />
            <Work
              title="Esther Rivas"
              link="https://dcu4.github.io/DCU4.github.io-Esther-Rivas/index.html"
              img="img/esther.gif"
              info="An HTML, SASS/SCSS, and JavaScript website for a friend who is a painter."
              darkMode={darkMode ? 'dark-mode' : ''}
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
