import React, { Component } from "react";
import ReactDOM from "react-dom";
import Nav from "../presentational/Nav.jsx";
import About from "../presentational/About.jsx";
import { Work } from "../presentational/Work.jsx";
import { handleMove } from '../container/handleMove.js';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAboutShowing: false,
      darkMode: true,
      animationClass: ''
    };
    
  }

  handleShow = () => {
    this.setState({
      isAboutShowing: this.state.isAboutShowing == false ? true : false
    });
  }

  handleMode = () =>{
    this.setState({
      darkMode: this.state.darkMode == false ? true : false
    });
  }

  navigateAnimation = () => {
    this.setState({
      animationClass: this.state.isAboutShowing ? '' : 'navigate'
    })
  }



  render() {

    const isAboutShowing = this.state.isAboutShowing;
    const darkMode = this.state.darkMode;
    darkMode ? document.body.classList = 'dark-mode' : document.body.classList =  '';

    let createGridItem = (n) => {
      let items = [];
      for(let i = 0; i < n; i++) {
        items.push(<span className="grid-item"></span>);
      }
      return items;
    }

    return (
      <div  onMouseMove={handleMove}  className={darkMode ? 'container dark-mode' : `container ${this.state.animationClass}`}>
        <div id="splash" className={darkMode ? `dark-mode ${this.state.animationClass}` : `${this.state.animationClass}`}></div>
        <header>
          <h1 className="title">
            <a className={darkMode ? ' dark-mode' : ''} href="/">Dylan Connor</a>
          </h1>
          <Nav navigateAnimation={this.navigateAnimation} onClick={this.handleShow} darkMode={darkMode ? 'dark-mode' : ''} />
          
        </header>
        <a className={darkMode ? 'dark-mode color-pref' : ' color-pref'}  onClick={this.handleMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</a>
        
        {isAboutShowing ? (
          <main className="aboutShowing">
             <div  className={darkMode ? 'grid dark-mode' : 'grid'}>
              {createGridItem(7)}
            </div>
            <About
              darkMode={darkMode ? 'dark-mode' : ''}
            />
          </main>

        ) : (
          <main className="workShowing">
             <div className={darkMode ? 'grid dark-mode' : 'grid'}>
                {createGridItem(10)}
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
