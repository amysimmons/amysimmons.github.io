var Header = React.createClass({
  render() {
    return (
      <header>
        <nav>
          <i className="fa fa-bars hamburger"></i>
          <ul>
            <li className="nav-li"><i className="fa fa-home nav-icon"></i><a href="#/" className="nav-link home-link">home</a></li>
            <li className="nav-li"><i className="fa fa-laptop nav-icon"></i><a href="#/projects" className="nav-link projects-link">projects</a></li>
            <li className="nav-li"><i className="fa fa-info nav-icon"></i><a href="#/about" className="nav-link about-link">about</a></li>
            <li className="nav-li"><i className="fa fa-envelope nav-icon"></i><a href="#/resume" className="nav-link resume-link">resume</a></li>
            <li className="nav-li"><i className="fa fa-code nav-icon"></i><a href="#/just-for-fun" className="nav-link fun-link">just for fun</a></li>
          </ul>
        </nav>
      </header>
    )
  }
});

var Home = React.createClass({
  render (){
    return (
      
        <div className="section" id="home">
          <h1 className="name">Hi! I''m <span className="highlight">Amy</span>, a full-stack <span className="highlight">web developer</span> in <span className="highlight">Sydney</span>, Australia.</h1>
          <div id="social-icons">
            <a className="fa fa-envelope-o" href="mailto:amysimmons.abc@gmail.com"></a>
            <a className="fa fa-github" href="https://github.com/amysimmons"></a>
            <a className="fa fa-twitter" href="https://twitter.com/amesimmons"></a>
            <a className="fa fa-linkedin" href="https://au.linkedin.com/in/amesimmons"></a>
          </div>
        </div>
    
    )
  }
});

var Project = React.createClass({
  render () {
    var project = this.props.project;
    return (
     <div className="project">
        <h3>{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="technologies">{project.technologies}</div>
        <a href={project.site} className="project-link">View site</a> 
        <a href={project.code} className="project-link">View code</a>
        <a href={project.flower} className="project-link">Code flower</a>
        <img className="project-image" src={project.image} alt={project.imageAltText}></img>
      </div>
    );
  },
});

var Projects = React.createClass({
  render (){
    var projectsData = [
      {
      title: "A guide to the care and feeding of new devs",
      description: "In November 2015 I surveyed junior web developers to find out how they could be better supported in the workplace. This website outlines my findings.",
      technologies: "React | JavaScript | Html | Css",
      site: "http://amysimmons.github.io/a-guide-to-the-care-and-feeding-of-new-devs/",
      code: "https://github.com/amysimmons/a-guide-to-the-care-and-feeding-of-new-devs",
      flower: "",
      image: "project-images/new-devs-guide.png",
      imageAltText: "A guide to the care and feeding of new devs"
    },
    {
      title: "Rails Girls Events",
      description: "I built this Rails app during SheHacks 2015 with Lucy Bain. It was used to manage applications for the Rails Girls Winter 2015 event, which I helped organise.",
      technologies: "Ruby on Rails | JavaScript | jQuery | HTML | CSS",
      site: "http://rails-girls-events.herokuapp.com/",
      code: "https://github.com/amysimmons/rails-girls-events",
      flower: "",
      image: "project-images/rails-girls-events.png",
      imageAltText: "Rails Girls Events"
    },
    {
      title: "Playa",
      description: "My final project for Web Development Immersive. Playa brings democracy to music playlists, allowing guests to add an equal number of songs and vote to skip.",
      technologies: "Ruby on Rails | JavaScript | jQuery | Backbone.js | Underscore.js | Ajax| HTML | CSS",
      site: "https://playa-app.herokuapp.com",
      code: "https://github.com/amysimmons/playa_app",
      flower: "#/just-for-fun",
      image: "project-images/playa.png",
      imageAltText: "Playa"
    },
    {
      title: "Sparkr",
      description: "My second project for Web Development Immersive. Sparkr is a dating app for mature-aged singles, where connections are formed through moments.",
      technologies: "Ruby on Rails | JavaScript | jQuery | Ajax | Handlebars.js| HTML | CSS",
      site: "http://make-sparks-fly.herokuapp.com/",
      code: "https://github.com/amysimmons/sparkr_app",
      flower: "#/just-for-fun",
      image: "project-images/sparkr.png",
      imageAltText: "Sparkr"
    },
    {
      title: "Twitter",
      description: "My first project for Web Development Immersive. I built a version of Twitter which allows users to quickly and easily separate accredited News tweets from the noise.",
      technologies: "Ruby on Rails | JavaScript | jQuery | HTML | CSS",
      site: "http://twitter-news.herokuapp.com/",
      code: "https://github.com/amysimmons/twitter",
      flower: "#/just-for-fun",
      image: "project-images/twitter.png",
      imageAltText: "Twitter"
    },
    {
      title: "Faith in Numbers",
      description: "I built this website in March 2014 as my final project in General Assembly’s Front-End Web Development course. It was my first time using d3js.",
      technologies: "JavaScript | jQuery | D3js | HTML | CSS",
      site: "http://amysimmons.github.io/faith-in-numbers/",
      code: "https://github.com/amysimmons/Faith-in-Numbers",
      flower: "#/just-for-fun",
      image: "project-images/faith-in-numbers.png",
      imageAltText: "Faith in Numbers"
    },
    {
      title: "Promise Tracker",
      description: "I produced Australia’s first interactive election promise tracker, which was nominated for a Walkley Award for excellence in multimedia journalism.",
      technologies: "CoreMedia | Keystone.js",
      site: "http://www.abc.net.au/news/factcheck/promisetracker/",
      code: "",
      flower: "",
      image: "project-images/promise-tracker.png",
      imageAltText: "Promise Tracker"
    }
    ];

    var projects = [];
    for (var i = 0; i < projectsData.length; i++) {
    var project = projectsData[i];
    projects.push(<Project key={i} project={project} />)
  };

    return (
      <div>
        <h2>Projects</h2>
      {projects}
      </div>
    )
  }
});

var Resume = React.createClass({
  render (){
    return (
       <div className="section" id="resume">
       <div className="resume-col-1">
          <div className="resume-section">
            <h2 className="resume-title">RESUME</h2>
            <h3>AMY SIMMONS</h3>
            <div className="resume-item">
              <span className="resume-info">
                +61 404 925 905 | @amesimmons | amysimmons.github.io | amysimmons.abc@gmail.com
              </span>
            </div>
          </div>
          <div className="resume-section">
            <h2>dev life</h2>
            <div className="resume-item">
              <span className="resume-date">December 2015:</span>
              <span className="resume-info">Yow</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">December 2015:</span>
              <span className="resume-info">Girl Geek dinner</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">November 2015:</span>
              <span className="resume-info">CampJS talk</span>
            </div>  
            <div className="resume-item">
              <span className="resume-date">October 2015:</span>
              <span className="resume-info">Web Directions</span>
            </div>  
            <div className="resume-item">
              <span className="resume-date">October 2015:</span>
              <span className="resume-info">Product Hunt Sydney talk</span>
            </div>  
            <div className="resume-item">
              <span className="resume-date">October 2015:</span>
              <span className="resume-info">Code Newbies podcast</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">September to December 2015:</span>
              <span className="resume-info">JavaScript Study Group organiser and attendee</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">August 2015:</span>
              <span className="resume-info">Rails Girls organiser and host</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">June 2015:</span>
              <span className="resume-info">Rails Camp</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">June 2015:</span>
              <span className="resume-info">SydCss talk</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">May 2015:</span>
              <span className="resume-info">SheHacks hackathon</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">March 2015:</span>
              <span className="resume-info">Rails Girls Mentor</span>
            </div>
          </div>
        </div>
        <div className="resume-col-2">
          <div className="resume-section">
            <h2>employment history</h2>
            <div className="resume-item">
              <span className="resume-date">April 2015 to now:</span>
              <span className="resume-info">Developer, ansarada</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">January 2009 to December 2014: </span>
              <span className="resume-info">Journalist/Digital Producer, Australian Broadcasting Corporation
              </span>
            </div>
            <div className="resume-item">
              <span className="resume-achievement">Achievement:</span>
                <span className="resume-info">Nnominated for a Walkley Award for Excellence in Multimedia Storytelling for producing the Promise Tracker – an interactive data visualisation project, which I led for 12 months.
              </span>
            </div>
          </div>
          <div className="resume-section">
            <h2>education</h2>
            <div className="resume-item">
              <span className="resume-date">April to June 2015:</span>
              <span className="resume-info">ThoughtWorks LevelUp program
              </span>
            </div>
            <div className="resume-item">
              <span className="resume-date">January to April 2015: </span>
              <span className="resume-info">Web Development Immersive, General Assembly
              </span>
            </div>
            <div className="resume-item">
              <span className="resume-date">July 2014:</span>
              <span className="resume-info">Rails Girls Next
              </span>
            </div>
            <div className="resume-item">
              <span className="resume-date">January to March 2014: </span>
              <span className="resume-info">  Front-End Web Development, General Assembly 
              </span>
            </div>
            <div className="resume-item">
              <span className="resume-date">November 2013:</span>
              <span className="resume-info">Rails Girls Beginner 
              </span>
            </div>
            <div className="resume-item">
              <span className="resume-date">2005 to 2008:</span>
              <span className="resume-info">Bachelor of Journalism & Bachelor of Arts, University of Queensland. I graduated with a GPA of 6 (out of 7). My Arts majors were Religion and Political Science.
              </span>
            </div>
          </div>
          <div className="resume-section">
            <h2>skills</h2>
            <div className="resume-item">
              <span className="resume-info">JavaScript, React, React Native, jQuery, Canvas, Backbone.js, Underscore.js, HTML, CSS, Ruby, Ruby on Rails, PostgreSQL, SQL, C#, .net</span>
            </div>
          </div>
        </div>
        <div className="resume-download">
          <a className="resume-download-link" href="/files/Amy-Simmons-Resume-April-2015.pdf" download>Download my resume</a>
        </div>
      </div>
    )
  }
});

var About = React.createClass({
  render (){
    return (
      <div className="section" id="about">
        <h2>About</h2>
        <img className="profile" src="images/profile-pic.jpg" alt="Amy Simmons"></img>
        <div className="about-content">
          <p>I spent the first three months of 2015 transitioning from a journalist/digital producer into a full-stack web developer who can build apps from scratch using a variety of programming languages and libraries.</p>
          <p>I graduated from General Assembly’s Web Development Immersive course in April. During the course I worked the hardest I’ve ever worked, and I loved every minute of it.</p>
          <p>I can’t wait to find an amazing workplace where I can put my skills and passions to use, continue learning to code and become the best developer I can be.</p>
        </div>
      </div>
    )
  }
});

var JustForFun = React.createClass({
  render (){

    var windowWidth = $('.content-container').width();

    // Faith in Numbers code flower
    var finCodeFlower;
    var createCodeFlower = function(json) {
      // update the jsonData textarea
      // document.getElementById('jsonData').innerHTML = JSON.stringify(json);
      // remove previous flower to save memory
      if (finCodeFlower) finCodeFlower.cleanup();
      // adapt layout size to the total number of elements
      var total = countElements(json);
      var size = parseInt(Math.sqrt(total) * 30, 10);
      size = Math.min(size, windowWidth);
      // create a new CodeFlower
      finCodeFlower = new CodeFlower("#fin-visualisation", size, size).update(json);
    };
    d3.json('js/json/fin.json', createCodeFlower);

    // Sparkr code flower
    var sparkrCodeFlower;
    var createCodeFlower = function(json) {
      // update the jsonData textarea
      // document.getElementById('jsonData').innerHTML = JSON.stringify(json);
      // remove previous flower to save memory
      if (sparkrCodeFlower) sparkrCodeFlower.cleanup();
      // adapt layout size to the total number of elements
      var total = countElements(json);
      var size = parseInt(Math.sqrt(total) * 30, 10) + 150;
      size = Math.min(size, windowWidth);
      // create a new CodeFlower
      sparkrCodeFlower = new CodeFlower("#sparkr-visualisation", size, size).update(json);
    };
    d3.json('js/json/sparkr.json', createCodeFlower);

    // Twitter code flower
    var twitterCodeFlower;
    var createCodeFlower = function(json) {
      // update the jsonData textarea
      // document.getElementById('jsonData').innerHTML = JSON.stringify(json);
      // remove previous flower to save memory
      if (twitterCodeFlower) twitterCodeFlower.cleanup();
      // adapt layout size to the total number of elements
      var total = countElements(json);
      var size = parseInt(Math.sqrt(total) * 30, 10) + 150;
      size = Math.min(size, windowWidth);
      // create a new CodeFlower
      twitterCodeFlower = new CodeFlower("#twitter-visualisation", size, size).update(json);
    };
    d3.json('js/json/twitter.json', createCodeFlower);

    // Playa code flower
    var playaCodeFlower;
    var createCodeFlower = function(json) {
      // update the jsonData textarea
      // document.getElementById('jsonData').innerHTML = JSON.stringify(json);
      // remove previous flower to save memory
      if (playaCodeFlower) playaCodeFlower.cleanup();
      // adapt layout size to the total number of elements
      var total = countElements(json);
      var size = parseInt(Math.sqrt(total) * 30, 10) + 150;
      size = Math.min(size, windowWidth);
      // create a new CodeFlower
      playaCodeFlower = new CodeFlower("#playa-visualisation", size, size).update(json);
    };
    d3.json('js/json/playa.json', createCodeFlower);



    return (
      <div className="section" id="just-for-fun">
        <h2>Just for fun</h2>
        <div className="code-flower-container">
          <h3>Code flowers</h3>
          <p>Each disc represents a file, with a radius proportional to the number of lines of code. Source: Via <a href="http://www.redotheweb.com/CodeFlower/">François Zaninotto</a>, built with D3js.</p>
          <div className="code-flower">
            <h4>Playa</h4>
            <div id="playa-visualisation"></div>
          </div>
          <div className="code-flower">
            <h4>Sparkr</h4>
            <div id="sparkr-visualisation"></div> 
          </div>
          <div className="code-flower">
            <h4>Twitter</h4>
            <div id="twitter-visualisation"></div>
          </div>
          <div className="code-flower">
            <h4>Faith In Numbers</h4>
            <div id="fin-visualisation"></div>
          </div>
        </div>
      </div>
    )
  }
});

var Portfolio = React.createClass({ 
  getInitialState() {
      return {
        route: window.location.hash.substr(1)
      }
  },

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      })
    })
  },

  render() {
    switch (this.state.route) {
      case '/': $('body').css('background-color', '#FFD10F'); break;
      case '/projects': $('body').css('background-color', '#fff'); break;
      case '/about': $('body').css('background-color', '#fff'); break;
      case '/resume': $('body').css('background-color', '#fff'); break;
      case '/just-for-fun': $('body').css('background-color', '#fff'); break;
    }

    let Child
    switch (this.state.route) {
      case '/projects': Child = Projects; break;
      case '/about': Child = About; break;
      case '/resume': Child = Resume; break;
      case '/just-for-fun': Child = JustForFun; break;
      default:      Child = Home;
    }

    return (
      <div className="container">
        <Header />
        <div className="content-container" id="content-container">
          <Child/>
        </div>
      </div>
    )
  }
});

ReactDOM.render(
  <Portfolio />, document.getElementById('root')
);

var showNavMenu = function(){
$('nav ul').toggleClass('show-menu');
};

$('.hamburger').on('click', showNavMenu);
