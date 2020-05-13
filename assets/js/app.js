$(document).foundation()

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
     //console.log(scroll);
    if (scroll >= 400) {
        //console.log('a');
        $(".top-bar").removeClass("menu-fixe").addClass("menu-scroll"); 
    } else {
        //console.log('a');
        $(".top-bar").removeClass("menu-scroll").addClass("menu-fixe");
    }
});

function ChangeFilter() {
    var programmingSkills = document.querySelectorAll('[id=programming]');
    var mechatronicsSkills = document.querySelectorAll('[id=mechatronics]');
    var embeddedSystemsSkills = document.querySelectorAll('[id=embedded-systems]');
    var softSkillSkills = document.querySelectorAll('[id=soft-skill]');

    if(document.getElementById("programming-checkbox").checked){

        for(var i=0; i<programmingSkills.length; i++) {
            programmingSkills[i].style.display = 'block'
        }
        for(var i=0; i<mechatronicsSkills.length; i++){
            mechatronicsSkills[i].style.display = 'none'
        }
        for(var i=0; i<embeddedSystemsSkills.length; i++){
            embeddedSystemsSkills[i].style.display = 'none'
        }
        for(var i=0; i<softSkillSkills.length; i++){
            softSkillSkills[i].style.display = 'none'
        }
    }
    if(document.getElementById("mechatronics-checkbox").checked){
        for(var i=0; i<programmingSkills.length; i++) {
            programmingSkills[i].style.display = 'none'
        }
        for(var i=0; i<mechatronicsSkills.length; i++){
            mechatronicsSkills[i].style.display = 'block'
        }
        for(var i=0; i<embeddedSystemsSkills.length; i++){
            embeddedSystemsSkills[i].style.display = 'none'
        }
        for(var i=0; i<softSkillSkills.length; i++){
            softSkillSkills[i].style.display = 'none'
        }
    }

    if(document.getElementById("embedded-systems-checkbox").checked){
        for(var i=0; i<programmingSkills.length; i++) {
            programmingSkills[i].style.display = 'none'
        }
        for(var i=0; i<mechatronicsSkills.length; i++){
            mechatronicsSkills[i].style.display = 'none'
        }
        for(var i=0; i<embeddedSystemsSkills.length; i++){
            embeddedSystemsSkills[i].style.display = 'block'
        }
        for(var i=0; i<softSkillSkills.length; i++){
            softSkillSkills[i].style.display = 'none'
        }
    }

    if(document.getElementById("soft-skill-checkbox").checked){
        for(var i=0; i<programmingSkills.length; i++) {
            programmingSkills[i].style.display = 'none'
        }
        for(var i=0; i<mechatronicsSkills.length; i++){
            mechatronicsSkills[i].style.display = 'none'
        }
        for(var i=0; i<embeddedSystemsSkills.length; i++){
            embeddedSystemsSkills[i].style.display = 'none'
        }
        for(var i=0; i<softSkillSkills.length; i++){
            softSkillSkills[i].style.display = 'block'
        }
    }

    if(document.getElementById("all-checkbox").checked){
        for(var i=0; i<programmingSkills.length; i++) {
            programmingSkills[i].style.display = 'block'
        }
        for(var i=0; i<mechatronicsSkills.length; i++){
            mechatronicsSkills[i].style.display = 'block'
        }
        for(var i=0; i<embeddedSystemsSkills.length; i++){
            embeddedSystemsSkills[i].style.display = 'block'
        }
        for(var i=0; i<softSkillSkills.length; i++){
            softSkillSkills[i].style.display = 'block'
        }
    }


}

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