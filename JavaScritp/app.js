
$(document).ready(function(){
  $('.testimonial_cours').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    infinite: false,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 319,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1
          
        }
      }
    ]
  });

  $('.partner_section').slick({
    dots: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    infinite: false,
    autoplaySpeed: 1800,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
    
  });
  
  $('#bar1').barfiller();
  $('#bar2').barfiller();
  $('#bar3').barfiller();
  $('#bar4').barfiller();


},{offset:'05%'})

// const toggleIcon = document.querySelector('icon i')
const toggleBtn =document.querySelector('.icon');
const toggleIcon =document.querySelector('.icon i');
const dropdownManu = document.querySelector('.dropdown_manu');

toggleBtn.onclick = function () {

  dropdownManu.classList.toggle('hide')
  const ishide = dropdownManu.classList.contains('hide')
  toggleIcon.classList = ishide
  ? 
  'fa-solid fa-xmark'
  :
  'fa-solid fa-bars'
  console.log('ami');
}


    

