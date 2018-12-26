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
			
			$('.about').animate({
				opacity: '1'
			}).css({
				display: 'flex'
				});
			$('.work').animate({
				opacity: '0'
			}).css({
				display: 'none'
			});



		} else {
			aboutLink.classList.remove('selected');
			workLink.classList.add('selected');

			$('.work').animate({
				opacity: '1'
			}).css({
				display: 'flex'
				});
			$('.about').animate({
				opacity: '0'
			}).css({
				display: 'none'
			});

		}

		// if (about.style.opacity === '0') {
		// 	about.style.display = 'none';
		// 	console.log(about);
		// } else {
		// 	about.style.display = 'flex';
		// 	console.log(about);
		// }
	
});

}



