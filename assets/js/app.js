$(document).foundation()

/* ALl pages - Menu changes */
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
     //console.log(scroll);
    if (scroll >= 376.45) {
        //console.log('a');
        $(".top-bar").removeClass("menu-fixe").addClass("menu-scroll"); 
    } else {
        //console.log('a');
        $(".top-bar").removeClass("menu-scroll").addClass("menu-fixe");
    }
});

/* Skill pages - Filter buttons */
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

/* Awards pages - Arrow button */
$('.awards-intro-button-link').click(function(e){
  e.preventDefault();
  if ( $(".awards-intro-button-content").is(':hidden') ) {
    $('.awards-intro-button-link').find('i').removeClass('fi-arrow-down').addClass('fi-arrow-up');
    ChangeAllOlympiadsFilter()
  } else {
    $('.awards-intro-button-link').find('i').removeClass('fi-arrow-up').addClass('fi-arrow-down');
    ChangeAllFilter();
  }
  $(this).next('.awards-intro-button-content').slideToggle();
});



/* Awards pages - Filter buttons */
$('[data-award-event-toggle] .button').click(function () {
  $(this).siblings().removeClass('is-active');
  $(this).addClass('is-active');
});

function ChangeAllFilter() {
    var astronomyOlympiad = document.querySelectorAll('[id=astronomy-olympiad]');
    var roboticsOlympiad = document.querySelectorAll('[id=robotics-olympiad]');
    var mathsOlympiad = document.querySelectorAll('[id=maths-olympiad]');
    var eventParticipant = document.querySelectorAll('[id=event-participant]');
    var eventOrganiserStaff = document.querySelectorAll('[id=event-organiser-staff]');
    var courses = document.querySelectorAll('[id=course]');

    for(var i=0; i<astronomyOlympiad.length; i++) {
        astronomyOlympiad[i].style.display = 'block'
    }
    for(var i=0; i<roboticsOlympiad.length; i++){
        roboticsOlympiad[i].style.display = 'block'
    }
    for(var i=0; i<mathsOlympiad.length; i++){
        mathsOlympiad[i].style.display = 'block'
    }
    for(var i=0; i<eventParticipant.length; i++){
        eventParticipant[i].style.display = 'block'
    }
    for(var i=0; i<eventOrganiserStaff.length; i++){
        eventOrganiserStaff[i].style.display = 'block'
    }
    for(var i=0; i<courses.length; i++){
        courses[i].style.display = 'block'
    }
}

function ChangeAllOlympiadsFilter() {
    var astronomyOlympiad = document.querySelectorAll('[id=astronomy-olympiad]');
    var roboticsOlympiad = document.querySelectorAll('[id=robotics-olympiad]');
    var mathsOlympiad = document.querySelectorAll('[id=maths-olympiad]');
    var eventParticipant = document.querySelectorAll('[id=event-participant]');
    var eventOrganiserStaff = document.querySelectorAll('[id=event-organiser-staff]');
    var courses = document.querySelectorAll('[id=course]');

    for(var i=0; i<astronomyOlympiad.length; i++) {
        astronomyOlympiad[i].style.display = 'block'
    }
    for(var i=0; i<roboticsOlympiad.length; i++){
        roboticsOlympiad[i].style.display = 'block'
    }
    for(var i=0; i<mathsOlympiad.length; i++){
        mathsOlympiad[i].style.display = 'block'
    }
    for(var i=0; i<eventParticipant.length; i++){
        eventParticipant[i].style.display = 'none'
    }
    for(var i=0; i<eventOrganiserStaff.length; i++){
        eventOrganiserStaff[i].style.display = 'none'
    }
    for(var i=0; i<courses.length; i++){
        courses[i].style.display = 'none'
    }
}

function ChangeMathsOlympiadsFilter() {
    var astronomyOlympiad = document.querySelectorAll('[id=astronomy-olympiad]');
    var roboticsOlympiad = document.querySelectorAll('[id=robotics-olympiad]');
    var mathsOlympiad = document.querySelectorAll('[id=maths-olympiad]');
    var eventParticipant = document.querySelectorAll('[id=event-participant]');
    var eventOrganiserStaff = document.querySelectorAll('[id=event-organiser-staff]');
    var courses = document.querySelectorAll('[id=course]');

    for(var i=0; i<astronomyOlympiad.length; i++) {
        astronomyOlympiad[i].style.display = 'none'
    }
    for(var i=0; i<roboticsOlympiad.length; i++){
        roboticsOlympiad[i].style.display = 'none'
    }
    for(var i=0; i<mathsOlympiad.length; i++){
        mathsOlympiad[i].style.display = 'block'
    }
    for(var i=0; i<eventParticipant.length; i++){
        eventParticipant[i].style.display = 'none'
    }
    for(var i=0; i<eventOrganiserStaff.length; i++){
        eventOrganiserStaff[i].style.display = 'none'
    }
    for(var i=0; i<courses.length; i++){
        courses[i].style.display = 'none'
    }
}

function ChangeRoboticsOlympiadsFilter() {
    var astronomyOlympiad = document.querySelectorAll('[id=astronomy-olympiad]');
    var roboticsOlympiad = document.querySelectorAll('[id=robotics-olympiad]');
    var mathsOlympiad = document.querySelectorAll('[id=maths-olympiad]');
    var eventParticipant = document.querySelectorAll('[id=event-participant]');
    var eventOrganiserStaff = document.querySelectorAll('[id=event-organiser-staff]');
    var courses = document.querySelectorAll('[id=course]');

    for(var i=0; i<astronomyOlympiad.length; i++) {
        astronomyOlympiad[i].style.display = 'none'
    }
    for(var i=0; i<roboticsOlympiad.length; i++){
        roboticsOlympiad[i].style.display = 'block'
    }
    for(var i=0; i<mathsOlympiad.length; i++){
        mathsOlympiad[i].style.display = 'none'
    }
    for(var i=0; i<eventParticipant.length; i++){
        eventParticipant[i].style.display = 'none'
    }
    for(var i=0; i<eventOrganiserStaff.length; i++){
        eventOrganiserStaff[i].style.display = 'none'
    }
    for(var i=0; i<courses.length; i++){
        courses[i].style.display = 'none'
    }
}

function ChangeAstronomyOlympiadsFilter() {
    var astronomyOlympiad = document.querySelectorAll('[id=astronomy-olympiad]');
    var roboticsOlympiad = document.querySelectorAll('[id=robotics-olympiad]');
    var mathsOlympiad = document.querySelectorAll('[id=maths-olympiad]');
    var eventParticipant = document.querySelectorAll('[id=event-participant]');
    var eventOrganiserStaff = document.querySelectorAll('[id=event-organiser-staff]');
    var courses = document.querySelectorAll('[id=course]');

    for(var i=0; i<astronomyOlympiad.length; i++) {
        astronomyOlympiad[i].style.display = 'block'
    }
    for(var i=0; i<roboticsOlympiad.length; i++){
        roboticsOlympiad[i].style.display = 'none'
    }
    for(var i=0; i<mathsOlympiad.length; i++){
        mathsOlympiad[i].style.display = 'none'
    }
    for(var i=0; i<eventParticipant.length; i++){
        eventParticipant[i].style.display = 'none'
    }
    for(var i=0; i<eventOrganiserStaff.length; i++){
        eventOrganiserStaff[i].style.display = 'none'
    }
    for(var i=0; i<courses.length; i++){
        courses[i].style.display = 'none'
    }
}

function ChangeAllEventsFilter() {
    var astronomyOlympiad = document.querySelectorAll('[id=astronomy-olympiad]');
    var roboticsOlympiad = document.querySelectorAll('[id=robotics-olympiad]');
    var mathsOlympiad = document.querySelectorAll('[id=maths-olympiad]');
    var eventParticipant = document.querySelectorAll('[id=event-participant]');
    var eventOrganiserStaff = document.querySelectorAll('[id=event-organiser-staff]');
    var courses = document.querySelectorAll('[id=course]');

    for(var i=0; i<astronomyOlympiad.length; i++) {
        astronomyOlympiad[i].style.display = 'none'
    }
    for(var i=0; i<roboticsOlympiad.length; i++){
        roboticsOlympiad[i].style.display = 'none'
    }
    for(var i=0; i<mathsOlympiad.length; i++){
        mathsOlympiad[i].style.display = 'none'
    }
    for(var i=0; i<eventParticipant.length; i++){
        eventParticipant[i].style.display = 'block'
    }
    for(var i=0; i<eventOrganiserStaff.length; i++){
        eventOrganiserStaff[i].style.display = 'block'
    }
    for(var i=0; i<courses.length; i++){
        courses[i].style.display = 'block'
    }
}

function ChangeParticipantEventsFilter() {
    var astronomyOlympiad = document.querySelectorAll('[id=astronomy-olympiad]');
    var roboticsOlympiad = document.querySelectorAll('[id=robotics-olympiad]');
    var mathsOlympiad = document.querySelectorAll('[id=maths-olympiad]');
    var eventParticipant = document.querySelectorAll('[id=event-participant]');
    var eventOrganiserStaff = document.querySelectorAll('[id=event-organiser-staff]');
    var courses = document.querySelectorAll('[id=course]');

    for(var i=0; i<astronomyOlympiad.length; i++) {
        astronomyOlympiad[i].style.display = 'none'
    }
    for(var i=0; i<roboticsOlympiad.length; i++){
        roboticsOlympiad[i].style.display = 'none'
    }
    for(var i=0; i<mathsOlympiad.length; i++){
        mathsOlympiad[i].style.display = 'none'
    }
    for(var i=0; i<eventParticipant.length; i++){
        eventParticipant[i].style.display = 'block'
    }
    for(var i=0; i<eventOrganiserStaff.length; i++){
        eventOrganiserStaff[i].style.display = 'none'
    }
    for(var i=0; i<courses.length; i++){
        courses[i].style.display = 'none'
    }
}

function ChangeOrganisationEventsFilter() {
    var astronomyOlympiad = document.querySelectorAll('[id=astronomy-olympiad]');
    var roboticsOlympiad = document.querySelectorAll('[id=robotics-olympiad]');
    var mathsOlympiad = document.querySelectorAll('[id=maths-olympiad]');
    var eventParticipant = document.querySelectorAll('[id=event-participant]');
    var eventOrganiserStaff = document.querySelectorAll('[id=event-organiser-staff]');
    var courses = document.querySelectorAll('[id=course]');

    for(var i=0; i<astronomyOlympiad.length; i++) {
        astronomyOlympiad[i].style.display = 'none'
    }
    for(var i=0; i<roboticsOlympiad.length; i++){
        roboticsOlympiad[i].style.display = 'none'
    }
    for(var i=0; i<mathsOlympiad.length; i++){
        mathsOlympiad[i].style.display = 'none'
    }
    for(var i=0; i<eventParticipant.length; i++){
        eventParticipant[i].style.display = 'none'
    }
    for(var i=0; i<eventOrganiserStaff.length; i++){
        eventOrganiserStaff[i].style.display = 'block'
    }
    for(var i=0; i<courses.length; i++){
        courses[i].style.display = 'none'
    }
}

function ChangeCoursesFilter() {
    var astronomyOlympiad = document.querySelectorAll('[id=astronomy-olympiad]');
    var roboticsOlympiad = document.querySelectorAll('[id=robotics-olympiad]');
    var mathsOlympiad = document.querySelectorAll('[id=maths-olympiad]');
    var eventParticipant = document.querySelectorAll('[id=event-participant]');
    var eventOrganiserStaff = document.querySelectorAll('[id=event-organiser-staff]');
    var courses = document.querySelectorAll('[id=course]');

    for(var i=0; i<astronomyOlympiad.length; i++) {
        astronomyOlympiad[i].style.display = 'none'
    }
    for(var i=0; i<roboticsOlympiad.length; i++){
        roboticsOlympiad[i].style.display = 'none'
    }
    for(var i=0; i<mathsOlympiad.length; i++){
        mathsOlympiad[i].style.display = 'none'
    }
    for(var i=0; i<eventParticipant.length; i++){
        eventParticipant[i].style.display = 'none'
    }
    for(var i=0; i<eventOrganiserStaff.length; i++){
        eventOrganiserStaff[i].style.display = 'none'
    }
    for(var i=0; i<courses.length; i++){
        courses[i].style.display = 'block'
    }
}

function ChangeSubjectFilter() {
    var allOlympiadsButton = document.getElementById("all-olympiads-button")
    var astronomyButton = document.getElementById("astronomy-button")
    var roboticsButton = document.getElementById("robotics-button")
    var mathsButton = document.getElementById("maths-button")

    document.getElementById("events-filter").style.display = "none";
    document.getElementById("subject-filter").style.display = "flex";

    if(allOlympiadsButton.className.indexOf('is-active')>= 0) {
        ChangeAllOlympiadsFilter();
    }
    if(astronomyButton.className.indexOf('is-active')>= 0) {
        ChangeAstronomyOlympiadsFilter();
    }
    if(roboticsButton.className.indexOf('is-active')>= 0) {
        ChangeRoboticsOlympiadsFilter();
    }
    if(mathsButton.className.indexOf('is-active')>= 0) {
        ChangeMathsOlympiadsFilter();
    }  
}

function ChangeEventFilter() {
    var allEventParticipantButton = document.getElementById("all-events-button")
    var eventParticipantButton = document.getElementById("events-participant-button")
    var eventOrganiserStaffButton = document.getElementById("events-organiser-staff-button")
    var coursesButton = document.getElementById("courses-button")

    document.getElementById("events-filter").style.display = "flex";
    document.getElementById("subject-filter").style.display = "none";

    if(allEventParticipantButton.className.indexOf('is-active')>= 0) {
        ChangeAllEventsFilter();
    }
    if(eventParticipantButton.className.indexOf('is-active')>= 0) {
        ChangeParticipantEventsFilter();
    }
    if(eventOrganiserStaffButton.className.indexOf('is-active')>= 0) {
        ChangeOrganisationEventsFilter();
    }
    if(coursesButton.className.indexOf('is-active')>= 0) {
        ChangeCoursesFilter();
    } 

}
