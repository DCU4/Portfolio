export const handleMove = e => {
    
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
    // console.log(mouse,inner.offsetHeight);
    updateTransformStyle(
      (mouse.y / inner.offsetHeight/2).toFixed(2),
      (mouse.x / inner.offsetWidth/2).toFixed(2)
    );
  };
  
  let updateTransformStyle = function(x, y) {
    // let style = "skewX(" + ( y*50) + "deg) skewY(" +x*25  + "deg)";
    let style = `translate(${y*250}px, ${x*250}px ) skew(${y*25}deg, ${x*10}deg)`;
    // console.log(style);
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