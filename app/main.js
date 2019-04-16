// var links = document.getElementsByClassName('link');
// var workLink = document.getElementById('work');
// var aboutLink = document.getElementById('about');
// var work = document.querySelector('.work');
// var about = document.querySelector('.about');

// var selected = false;


// for(var i = 0; i<links.length; i++){
// links[i].addEventListener('click',function(){

// 		if(this === aboutLink){
// 			workLink.classList.remove('selected');
// 			aboutLink.classList.add('selected');
			
// 			$('.about').animate({
// 				opacity: '1'
// 			}).css({
// 				display: 'flex'
// 				});
// 			$('.work').animate({
// 				opacity: '0'
// 			}).css({
// 				display: 'none'
// 			});



// 		} else {
// 			aboutLink.classList.remove('selected');
// 			workLink.classList.add('selected');

// 			$('.work').animate({
// 				opacity: '1'
// 			}).css({
// 				display: 'flex'
// 				});
// 			$('.about').animate({
// 				opacity: '0'
// 			}).css({
// 				display: 'none'
// 			});

// 		}
// });

// }



// var projects = $('.project');


// $('section > p').on('mouseover mouseout', function(){
// 	$(this).next().toggleClass('shown');
// 	console.log('hover');
// });

// $('section').on('mouseover mouseout', function(){
// 	$(this).toggleClass('on-top');
// });

// main.js

console.log('Inside app folder');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('app'));