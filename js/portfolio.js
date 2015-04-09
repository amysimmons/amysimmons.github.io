// console.log('portfolio js');

$(document).ready(function(){

  $home = $('#home')
  $about = $('#about')
  $contact = $('#contact')
  $projects = $('#projects')
  $justForFun = $('#just-for-fun')

  var hideAll = function(){
    $home.addClass('hide');
    $about.addClass('hide');
    $contact.addClass('hide');
    $projects.addClass('hide');
    $justForFun.addClass('hide');
  }
  hideAll();

  var showHome = function(){
    hideAll();
    $home.removeClass('hide');
    $('body').css('background-color', '#FFE11A');
  }
  showHome();

  var showPages = Sammy(function() {

    this.element_selector = '.content-container';

    this.get('#/', function(context) {
      // The context.app.swap('') tells Sammy to replace what's in my content div, rather than just appending to it.
        context.app.swap('');
        context.$element().append($home);
        $home.removeClass('hide');
        $('body').css('background-color', '#FFE11A');
        console.log('appenidn home');
    });

    this.get('#/projects', function(context) {
      // The context.app.swap('') tells Sammy to replace what's in my content div, rather than just appending to it.
        context.app.swap('');
        context.$element().append($projects);
        $projects.removeClass('hide');
        $('body').css('background-color', '#fff');
        console.log('appenidn projects')
    });

    this.get('#/about', function(context) {
      // The context.app.swap('') tells Sammy to replace what's in my content div, rather than just appending to it.
        context.app.swap('');
        context.$element().append($about);
        $about.removeClass('hide');
        $('body').css('background-color', '#fff');
        console.log('appenidn about')
    });

    this.get('#/contact', function(context) {
      // The context.app.swap('') tells Sammy to replace what's in my content div, rather than just appending to it.
        context.app.swap('');
        context.$element().append($contact);
        $contact.removeClass('hide');
        $('body').css('background-color', '#fff');
        console.log('appenidn contact')
    });

    this.get('#/just-for-fun', function(context) {
      // The context.app.swap('') tells Sammy to replace what's in my content div, rather than just appending to it.
        context.app.swap('');
        context.$element().append($justForFun);
        $justForFun.removeClass('hide');
        $('body').css('background-color', '#fff');
        console.log('appenidn justforfun')
    });

  });

  showPages.run();
  
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


  // draw name divs home page

  // var drawNameDivs = function(){

  //   var dotCount = 1;
  //   var rowCount = 1;
  //   // var $nameContainer = $('.name-container');
 
  //   // put 30 rows in the name container
  //   _(30).times(function(){ 
  //     $('<div></div>').addClass('row-div').addClass("'r" + rowCount++ + "'").appendTo('.name-container');
  //   });

  //   // for every row, append 300 dot divs 
  //   var rowDiv = $('.row-div')
  //   for (var i = 0; i < rowDiv.length; i++) {
  //     var currnetRowDiv = rowDiv[i];
  //     _(160).times(function(){ 
  //       $('<div></div>').addClass('dot-div').addClass("'d" + dotCount++ + "'").appendTo(currnetRowDiv);
  //       console.log('appending row');
  //     });
  //   };
  // }

  // drawNameDivs();

  // // toggles the color of the selected nav link
  // var toggleFont = function(){
  //   console.log('toggle being called');
  //   // $('.nav-li i, .nav-link').css('color', '#888');
  //   $(this).css('text-decoration', 'underline');
  // };

  // $('.nav-li').on('click', toggleFont);
