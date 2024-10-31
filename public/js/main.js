$(window).scroll(function(){
  var sticky = $('.nav'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('nav-sticky');
  else sticky.removeClass('nav-sticky');
});
$(".open-nav").click(function(){
   $('.nav-items').addClass('nav-show')
});
$(".close-nav").click(function(){
  $('.nav-items').removeClass('nav-show')
});
$(".nav-link").click(function(){
  $('.nav-items').removeClass('nav-show')
});



$('.calendar-owl').owlCarousel({
    items:1,
    loop:false,
    margin:10,
    nav:true,
    dots: false,
})

$('.video-owl').owlCarousel({
  items:3,
  loop:false,
  margin:5,
  nav:true,
  dots: true,
  responsive:{
    0:{
        items:2
    },
    480:{
      items:2
    },
    624:{
      items:2
    },
    768:{
        items:3
    },
    1024:{
        items:3
    }
}
})


const optionMenu = document.querySelector(".select-menu"),
  selectBtn = optionMenu.querySelector(".select-btn"),
  options = optionMenu.querySelectorAll(".option"),
  sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () =>
  optionMenu.classList.toggle("active")
);

options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerHTML;
    sBtn_text.innerHTML = selectedOption;

    optionMenu.classList.remove("active");
  });
});
