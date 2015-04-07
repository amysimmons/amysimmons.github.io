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

  var showPages = Sammy(function() {

    this.element_selector = '.content-container';

    this.get('index.html', function(context) {
      // The context.app.swap('') tells Sammy to replace what's in my content div, rather than just appending to it.
        context.app.swap('');
        context.$element().append($home);
        $home.removeClass('hide')
        console.log('appenidn home')
    });

    this.get('#/projects', function(context) {
      // The context.app.swap('') tells Sammy to replace what's in my content div, rather than just appending to it.
        context.app.swap('');
        context.$element().append($projects);
        $projects.removeClass('hide')
        console.log('appenidn projects')
    });

    this.get('#/about', function(context) {
      // The context.app.swap('') tells Sammy to replace what's in my content div, rather than just appending to it.
        context.app.swap('');
        context.$element().append($about);
        $about.removeClass('hide')
        console.log('appenidn about')
    });

    this.get('#/contact', function(context) {
      // The context.app.swap('') tells Sammy to replace what's in my content div, rather than just appending to it.
        context.app.swap('');
        context.$element().append($contact);
        $contact.removeClass('hide')
        console.log('appenidn contact')
    });

  });

  showPages.run();

  var toggleFont = function(){
    console.log('toggle being called');
    $('.nav-li i, .nav-link').css('color', '#888');
    $(this).children().css('color', '#32415b');
  };

  $('.nav-li').on('click', toggleFont);
  

  // Faith in Numbers code flower
  var finCodeFlower;
  var createCodeFlower = function(json) {
    // update the jsonData textarea
    // document.getElementById('jsonData').innerHTML = JSON.stringify(json);
    // remove previous flower to save memory
    if (finCodeFlower) finCodeFlower.cleanup();
    // adapt layout size to the total number of elements
    var total = countElements(json);
    w = parseInt(Math.sqrt(total) * 30, 10);
    h = parseInt(Math.sqrt(total) * 30, 10);
    // create a new CodeFlower
    finCodeFlower = new CodeFlower("#fin-visualisation", w, h).update(json);
  };
  d3.json('js/fin.json', createCodeFlower);


  // Sparkr code flower
  var sparkrCodeFlower;
  var createCodeFlower = function(json) {
    // update the jsonData textarea
    // document.getElementById('jsonData').innerHTML = JSON.stringify(json);
    // remove previous flower to save memory
    if (sparkrCodeFlower) sparkrCodeFlower.cleanup();
    // adapt layout size to the total number of elements
    var total = countElements(json);
    w = parseInt(Math.sqrt(total) * 30, 10);
    h = parseInt(Math.sqrt(total) * 30, 10);
    // create a new CodeFlower
    sparkrCodeFlower = new CodeFlower("#sparkr-visualisation", w, h).update(json);
  };
  d3.json('js/sparkr.json', createCodeFlower);


  // Twitter code flower
  var twitterCodeFlower;
  var createCodeFlower = function(json) {
    // update the jsonData textarea
    // document.getElementById('jsonData').innerHTML = JSON.stringify(json);
    // remove previous flower to save memory
    if (twitterCodeFlower) twitterCodeFlower.cleanup();
    // adapt layout size to the total number of elements
    var total = countElements(json);
    w = parseInt(Math.sqrt(total) * 30, 10);
    h = parseInt(Math.sqrt(total) * 30, 10);
    // create a new CodeFlower
    twitterCodeFlower = new CodeFlower("#twitter-visualisation", w, h).update(json);
  };
  d3.json('js/twitter.json', createCodeFlower);


  // Playa code flower
  var playaCodeFlower;
  var createCodeFlower = function(json) {
    // update the jsonData textarea
    // document.getElementById('jsonData').innerHTML = JSON.stringify(json);
    // remove previous flower to save memory
    if (playaCodeFlower) playaCodeFlower.cleanup();
    // adapt layout size to the total number of elements
    var total = countElements(json);
    w = parseInt(Math.sqrt(total) * 30, 10);
    h = parseInt(Math.sqrt(total) * 30, 10);
    // create a new CodeFlower
    playaCodeFlower = new CodeFlower("#playa-visualisation", w, h).update(json);
  };
  d3.json('js/playa.json', createCodeFlower);


});


  // var showHome = function(){
  //   hideAll();
  //   $home.removeClass('hide');
  // }
  // showHome();


// var app = Sammy('#content-container', function() {
//   // include a plugin
//   // this.use('Mustache');

//   // define a 'route'
//   this.get('#/about', function() {
//     // load some data
//     // this.load('posts.json')
//         // render a template
//         // .renderEach('post.mustache')

//         // swap the DOM with the new content
//         .swap();
//   });
// });

// // start the application
// app.run('#/');

 // $('.home-link').on('click', function(event){
  //   event.preventDefault();
  //   showHome();
  // });

  // $('.projects-link').on('click', function(event){
  //   event.preventDefault();
  //   showProjects();
  // });

  // $('.about-link').on('click', function(event){
  //   event.preventDefault();
  //   showAbout();
  // });

  // $('.contact-link').on('click', function(event){
  //   event.preventDefault();
  //   showContact();
  // });





  // var showHome = function(){
  //   hideAll();
  //   $home.removeClass('hide');
  // }
  // // showHome();

  // var showAbout = function(){
  //   hideAll();
  //   $about.removeClass('hide');
  // }

  // var showProjects = function(){
  //   hideAll();
  //   $projects.removeClass('hide');
  // }

  // var showContact = function(){
  //   hideAll();
  //   $contact.removeClass('hide');
  // }


  // $('nav a').smoothScroll();
