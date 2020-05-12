$(document).foundation()

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
     //console.log(scroll);
    if (scroll >= 100) {
        //console.log('a');
        $(".top-bar").removeClass("menu-fixe").addClass("menu-scroll"); 
    } else {
        //console.log('a');
        $(".top-bar").removeClass("menu-scroll").addClass("menu-fixe");
    }
});

/*
// more click
$('.card-profile-stats-more-link').click(function(e){
  e.preventDefault();
  if ( $(".card-profile-stats-more-content").is(':hidden') ) {
    $('.card-profile-stats-more-link').find('i').removeClass('fi-arrow-down').addClass('fi-arrow-up');
  } else {
    $('.card-profile-stats-more-link').find('i').removeClass('fi-arrow-up').addClass('fi-arrow-down');
  }
  $(this).next('.card-profile-stats-more-content').slideToggle();
});

*/
/*
var prev = 0;
var $window = $(window);
var nav = $('.scrollhide-nav');

$window.on('scroll', function(){
  var scrollTop = $window.scrollTop();
  nav.toggleClass('hidden', scrollTop > prev);
  prev = scrollTop;
});


*/