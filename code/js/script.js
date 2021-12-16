const toggleButton = document.getElementsByClassName('imgg')[0];
const navbarLinks = document.getElementsByClassName('linksNav');
toggleButton.addEventListener('click',function(){
for(var i =0 ;i<navbarLinks.length;i++)
navbarLinks[i].classList.toggle('active');


});