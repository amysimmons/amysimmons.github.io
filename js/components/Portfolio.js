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
            <li className="nav-li"><i className="fa fa-file-o nav-icon"></i><a href="#/resume" className="nav-link resume-link">resume</a></li>
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
          <h1 className="name">Hi! I&#39;m <span className="highlight">Amy</span>, a full-stack <span className="highlight">web developer</span> in <span className="highlight">Sydney</span>, Australia.</h1>
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

    var links = [];

    if (project.site != ""){
      links.push(
        <a href={project.site} className="project-link">View site</a>
      )
    }
    if(project.code != ""){
      links.push(
        <a href={project.code} className="project-link">View code</a>
      )
    }
    if(project.flower != ""){
      links.push(
        <a href={project.flower} className="project-link">Code flower</a>
      )
    }

    return (
     <div className="project">
        <h3>{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="technologies">{project.technologies}</div>
        {links}
        <img className={project.classes} src={project.image} alt={project.imageAltText}></img>
      </div>
    );
  },
});

var Projects = React.createClass({
  render (){
    var projectsData = [
      {
      title: "A guide to the care and feeding of new devs",
      description: "In November 2015 I interviewed junior web developers to find out how they could be better supported in the workplace. This website outlines my findings.",
      technologies: "React | JavaScript | HTML | CSS",
      site: "http://amysimmons.github.io/a-guide-to-the-care-and-feeding-of-new-devs/",
      code: "https://github.com/amysimmons/a-guide-to-the-care-and-feeding-of-new-devs",
      flower: "",
      image: "project-images/new-devs-guide.png",
      imageAltText: "A guide to the care and feeding of new devs",
      classes: "project-image"
    },
    {
      title: "JavaScript Study Group: 6 apps in 10 weeks",
      description: "I organised a 10-week JavaScript Study Group from September 30 to December 2, 2015. In that time I completed six projects, including a React Native Minesweeper app.",
      technologies: "React | React Native | JavaScript | jQuery | Canvas | HTML | CSS",
      site: "http://www.meetup.com/Sydney-JavaScript-Study-Group/about/",
      code: "https://github.com/amysimmons/js-study-group",
      flower: "",
      image: "project-images/minesweeper.png",
      imageAltText: "JavaScript Study Group: 6 apps in 10 weeks",
      classes: "iphone"
    },
    {
      title: "Rails Girls Events",
      description: "I contributed to this app during SheHacks 2015 and in the lead up to the Rails Girls 2015 Winter workshop. It was used to manage applications for the event, which I helped organise and host.",
      technologies: "Ruby on Rails | JavaScript | jQuery | HTML | CSS",
      site: "http://rails-girls-events.herokuapp.com/",
      code: "https://github.com/amysimmons/rails-girls-events",
      flower: "",
      image: "project-images/rails-girls-events.png",
      imageAltText: "Rails Girls Events",
      classes: "project-image"
    },
    {
      title: "Playa",
      description: "My final project for Web Development Immersive. Playa brings democracy to music playlists, allowing guests to add an equal number of songs and vote to skip.",
      technologies: "Ruby on Rails | JavaScript | jQuery | Backbone | Underscore | Ajax | HTML | CSS",
      site: "https://playa-app.herokuapp.com",
      code: "https://github.com/amysimmons/playa_app",
      flower: "#/just-for-fun",
      image: "project-images/playa.png",
      imageAltText: "Playa",
      classes: "project-image"
    },
    {
      title: "Sparkr",
      description: "My second project for Web Development Immersive. Sparkr is a dating app for mature-aged singles, where connections are formed through moments.",
      technologies: "Ruby on Rails | JavaScript | jQuery | Ajax | Handlebars | HTML | CSS",
      site: "http://make-sparks-fly.herokuapp.com/",
      code: "https://github.com/amysimmons/sparkr_app",
      flower: "#/just-for-fun",
      image: "project-images/sparkr.png",
      imageAltText: "Sparkr",
      classes: "project-image"
    },
    {
      title: "Twitter",
      description: "My first project for Web Development Immersive. I built a version of Twitter which allows users to quickly and easily separate accredited News tweets from the noise.",
      technologies: "Ruby on Rails | JavaScript | jQuery | HTML | CSS",
      site: "http://twitter-news.herokuapp.com/",
      code: "https://github.com/amysimmons/twitter",
      flower: "#/just-for-fun",
      image: "project-images/twitter.png",
      imageAltText: "Twitter",
      classes: "project-image"
    },
    {
      title: "Faith in Numbers",
      description: "I built this website in March 2014 as my final project in General Assembly’s Front-End Web Development course. It was my first time using D3.",
      technologies: "JavaScript | jQuery | D3 | HTML | CSS",
      site: "http://amysimmons.github.io/faith-in-numbers/",
      code: "https://github.com/amysimmons/Faith-in-Numbers",
      flower: "#/just-for-fun",
      image: "project-images/faith-in-numbers.png",
      imageAltText: "Faith in Numbers",
      classes: "project-image"
    },
    {
      title: "Promise Tracker",
      description: "I produced Australia’s first interactive election promise tracker, which was nominated for a Walkley Award for excellence in multimedia journalism.",
      technologies: "CoreMedia | Keystone.js",
      site: "http://www.abc.net.au/news/factcheck/promisetracker/",
      code: "",
      flower: "",
      image: "project-images/promise-tracker.png",
      imageAltText: "Promise Tracker",
      classes: "project-image"
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
                <a className="fa fa-envelope-o" href="mailto:amysimmons.abc@gmail.com"></a>
                <a className="fa fa-github" href="https://github.com/amysimmons"></a>
                <a className="fa fa-twitter" href="https://twitter.com/amesimmons"></a>
                <a className="fa fa-linkedin" href="https://au.linkedin.com/in/amesimmons"></a><br/> 
                <span>0404 925 905</span>
              </span>
            </div>
          </div>
          <div className="resume-section">
            <h2>dev life</h2>
            <div className="resume-item">
              <span className="resume-date">April 2015 to now:</span>
              <span className="resume-info">Developer, ansarada</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">December 2015:</span>
              <span className="resume-info">YOW! conference</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">December 2015:</span>
              <span className="resume-info">Girl Geek Dinner talk</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">November 2015:</span>
              <span className="resume-info">CampJS talk</span>
            </div>  
            <div className="resume-item">
              <span className="resume-date">October 2015:</span>
              <span className="resume-info">Web Directions conference</span>
            </div>  
            <div className="resume-item">
              <span className="resume-date">October 2015:</span>
              <span className="resume-info">Product Hunt Sydney talk</span>
            </div>  
            <div className="resume-item">
              <span className="resume-date">October 2015:</span>
              <span className="resume-info">CodeNewbie podcast</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">September to December 2015:</span>
              <span className="resume-info">JavaScript Study Group organiser, host and attendee</span>
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
              <span className="resume-info">SydCSS talk</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">May 2015:</span>
              <span className="resume-info">SheHacks hackathon</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">March 2015:</span>
              <span className="resume-info">Rails Girls mentor</span>
            </div>
          </div>
        </div>
        <div className="resume-col-2">
          <div className="resume-section">
            <h2>journo life</h2>
            <div className="resume-item">
              <span className="resume-date">January 2009 to December 2014: </span>
              <span className="resume-info">Journalist/Digital Producer, Australian Broadcasting Corporation
              </span>
            </div>
            <div className="resume-item">
              <span className="resume-achievement">Achievement:</span>
              <span className="resume-info">Nominated for a Walkley Award for Excellence in Multimedia Storytelling for producing the Promise Tracker – an interactive data visualisation project, which I led for 12 months.
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
              <span className="resume-info">JavaScript | React | React Native | jQuery | Canvas | Backbone | Underscore | HTML | CSS | Ruby | Rails | PostgreSQL | SQL | C# | .net | Interviewing | Writing | Producing | Editing</span>
            </div>
          </div>
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
          <p>I started my career in 2009 as a journalist/producer with <a href="http://www.abc.net.au/news/">ABC News Online</a> in Brisbane.</p>
          <p>From 4:30 am to 1:00 am, seven days a week, we covered major national and international news stories.</p>
          <p>A few years later I made the move to Sydney, and began working in the ABC&#39;s <a href="http://www.abc.net.au/news/factcheck/">Fact Checking Unit</a>. The unit held politicians to account - testing their claims through in-depth, rigorous research.</p>
          <p>This was the role that sparked my interest in coding. I wanted to tell stories in new and interesting ways, but didn&#39;t have the technical skills.</p>
          <p>I wrote my first line of code in November 2013, at a two-day <a href="http://railsgirls.com/sydney">Rails Girls</a> workshop. From that moment I was hooked, and I needed to learn more.</p>
          <p>In 2014 I took a part-time <a href="https://generalassemb.ly/education/front-end-web-development">front-end web development course</a> with General Assembly, received tutoring from a senior JavaScript developer at the ABC and attended more Rails Girls workshops.</p>
          <p>At the end of the year, I still wasn&#39;t satisfied. I wasn&#39;t progressing quickly enough, and I had so much to learn!</p>
          <p>I took the plunge, and signed up for General Assembly’s full-time, 12-week <a href="https://generalassemb.ly/education/web-development-immersive">Web Development Immersive course</a>.</p>
          <p>I spent the first three months of 2015 transitioning from a journalist/digital producer into a full-stack web developer.</p>
          <p>During the course I worked the hardest I’ve ever worked, and I loved every minute of it.</p>
          <p>I graduated in April and received my first full-time developer job, with an amazing company called <a href="https://www.ansarada.com/">ansarada</a>.</p>
          <p>Now that I&#39;m a developer, I&#39;ve realised the feeling of having "so much to learn" will never go away. It&#39;s overwhelming, but equally exciting.</p>
          <p>2015 has been the best year of my life, and that&#39;s all because I learnt to code.</p>
          <p>You can hear more about my journey from journalism to dev in my <a href="http://www.codenewbie.org/podcast/from-journalist-to-developer">CodeNewbie podcast interview</a> and <a href="https://www.youtube.com/watch?v=ljrvFZCuzN4&app=desktop">SydCSS talk</a>.</p>
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
          <p>Each disc represents a file, with a radius proportional to the number of lines of code. Source: Via <a href="http://www.redotheweb.com/CodeFlower/">François Zaninotto</a>, built with D3.</p>
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
