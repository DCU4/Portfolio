var links = document.getElementsByClassName('link');
var workLink = document.getElementById('work');
var aboutLink = document.getElementById('about');
var work = document.querySelector('.work');
var about = document.querySelector('.about');

var selected = false;


for(var i = 0; i<links.length; i++){
links[i].addEventListener('click',function(){

		if(this === aboutLink){
			workLink.classList.remove('selected');
			aboutLink.classList.add('selected');
			
			// $(work).addClass('not-shown');			
			// $(about).removeClass('not-shown');

			$(about).animate({
				left:'0'
			});
			$(work).animate({
				left:'-2000px'
			});



		} else {
			aboutLink.classList.remove('selected');
			workLink.classList.add('selected');


			// $(work).removeClass('not-shown');
			// $(about).addClass('not-shown');

			$(about).animate({
				left:'2000'
			});
			$(work).animate({
				left:'0'
			});

		}
	
});

}

