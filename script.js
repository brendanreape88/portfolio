$('.hamburger').on('click', function(event){
  //  $('.mobile-menu-div').toggle(2000);
    console.log('CLICKED')
  });
  
$('.bio-link').on('click', function(event){
  document.querySelector('.bio').scrollIntoView({ 
    behavior: 'smooth' 
  });
})

$('.portfolio-link').on('click', function(event){
  document.querySelector('.portfolio').scrollIntoView({ 
    behavior: 'smooth' 
  });
})