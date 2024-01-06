const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    } );
} );

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
let scrollingImage = document.querySelector('.moving-image');
let staticImage = document.querySelector('.static-image');
let dynamicLine = document.querySelector('.dynamic-line');

window.onload = function() {
    let mainContent = document.querySelector('.main-content');
    
    let scrollTop = window.scrollY;

    let totalHeight = mainContent.offsetHeight; // Total height of your content
    let viewportHeight = window.innerHeight;
  
    let percentageScrolled = (scrollTop / (totalHeight - viewportHeight)) * 100;
    if(percentageScrolled <= '5%'){
        dynamicLine.style.height = '5%';
        scrollingImage.style.top = '5%';
    } 

    let lem = document.getElementById('contact-form'); 
    if(lem)
    lem.addEventListener ('submit', function(event){
        emailjs.init('FDTw30LDJOwFefq5N');
        console.log("load");
        event.preventDefault();
        emailjs.sendForm('service_itxo858', 'template_mg5vt5q', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });

  };


window.onscroll = function() {
    console.log("scroll");
    let mainContent = document.querySelector('.main-content');
    
    let scrollTop = window.scrollY;

    let totalHeight = mainContent.offsetHeight; // Total height of your content
    let viewportHeight = window.innerHeight;
  
    let percentageScrolled = (scrollTop / (totalHeight - viewportHeight)) * 100;

    if(percentageScrolled > 1.5){
        dynamicLine.style.height = percentageScrolled + '%';
        scrollingImage.style.top = percentageScrolled + '%';
        dynamicLine.classList.add('dynamic-line-shift-down');
    }else if( percentageScrolled == 0 ){
        dynamicLine.classList.remove('dynamic-line-shift-down');    
        dynamicLine.style.height = '5%';
        scrollingImage.style.top = '5%';}
  };
  
  