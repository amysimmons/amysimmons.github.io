// console.log('portfolio js');

$(document).ready(function(){

  $home = $('#home')
  $about = $('#about')
  $contact = $('#contact')
  $projects = $('#projects')

  var hideAll = function(){
    $home.addClass('hide');
    $about.addClass('hide');
    $contact.addClass('hide');
    $projects.addClass('hide');
  }
  hideAll();

  var showHome = function(){
    hideAll();
    $home.removeClass('hide');
  }
  showHome();

  var showProjects = function(){
    hideAll();
    $projects.removeClass('hide');
  }

  var showAbout = function(){
    hideAll();
    $about.removeClass('hide');
  }

  var showContact = function(){
    hideAll();
    $contact.removeClass('hide');
  }

  var toggleFont = function(){
    console.log('toggle being called');
    $('.nav-li i, .nav-link').css('color', '#888');
    $(this).children().css('color', '#32415b');
  };

  $('.home-link').on('click', function(event){
    event.preventDefault();
    showHome();
  });

  $('.projects-link').on('click', function(event){
    event.preventDefault();
    showProjects();
  });

  $('.about-link').on('click', function(event){
    event.preventDefault();
    showAbout();
  });

  $('.contact-link').on('click', function(event){
    event.preventDefault();
    showContact();
  });

  $('.nav-li').on('click', toggleFont);
  
});


  // $('nav a').smoothScroll();
