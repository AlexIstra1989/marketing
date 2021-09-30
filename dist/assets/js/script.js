const { tree } = require("gulp");

$(function(){
  var mixer = mixitup('.portfolio__content');
  
  $('.slider-blog__inner').slick({
    dots: tree
  });

  $('.menu__burger').on('click', function(){
    $('.header__top-inner').toggleClass('.header__top-inner--active');
  });

});

//# sourceMappingURL=script.js.map
