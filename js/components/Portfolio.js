var Header = React.createClass({
  render() {
    return (
      <header>
        <nav>
          <i className="fa fa-bars hamburger"></i>
          <ul>
            <li className="nav-li"><i className="fa fa-home nav-icon"></i><a href="#/" className="nav-link home-link">home</a></li>
            <li className="nav-li"><i className="fa fa-info nav-icon"></i><a href="#/about" className="nav-link about-link">about</a></li>
            <li className="nav-li"><i className="fa fa-file-o nav-icon"></i><a href="#/resume" className="nav-link resume-link">resume</a></li>
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
          <h1 className="name">
            Hi! I&#39;m <span className="highlight">Amy</span>, a <span className="highlight">software engineer</span> in <span className="strikethrough">Sydney</span> <span className="highlight">London</span>.</h1>
          <div id="social-icons">
            <a className="fa fa-envelope-o" href="mailto:amysimmons.abc@gmail.com"></a>
            <a className="fa fa-github" href="https://github.com/amysimmons"></a>
            <a className="fa fa-twitter" href="https://twitter.com/amesimmons"></a>
            <a className="fa fa-medium" href="https://medium.com/@amesimmons/latest"></a>
            <a className="fa fa-linkedin" href="https://au.linkedin.com/in/amesimmons"></a>
          </div>
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
                <a className="fa fa-medium" href="https://medium.com/@amesimmons/latest"></a>
                <a className="fa fa-linkedin" href="https://au.linkedin.com/in/amesimmons"></a><br/>
              </span>
            </div>
          </div>
          <div className="resume-section">
            <h2>dev life</h2>
            <div className="resume-item">
              <span className="resume-date">September 2016 to now:</span>
              <span className="resume-info">Software engineer, <a href="https://www.twitter.com/">Twitter</a></span>
            </div>
            <div className="resume-item">
              <span className="resume-date">April 2015 to August 2016:</span>
              <span className="resume-info">Developer, <a href="https://www.ansarada.com/">ansarada</a></span>
            </div>
            <div className="resume-item">
              <span className="resume-date">May 2016 to July 2016:</span>
              <span className="resume-info"><a href="https://generalassemb.ly/education/javascript-development">JavaScript Development</a> teacher&#39;s assistant, General Assembly</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">July 2016:</span>
              <span className="resume-info"><a href="https://itunes.apple.com/gb/podcast/tech-women-australia/id1013578561?mt=2">Tech Women Australia</a> podcast interview</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">April 2016:</span>
              <span className="resume-info"><a href="http://www.railsgirls.com">Rails Girls</a> advanced mentor</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">March 2016:</span>
              <span className="resume-info"><a href="https://www.meetup.com/Ruby-On-Rails-Oceania-Sydney">Ruby on Rails Oceania Sydney</a> talk</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">January 2016:</span>
              <span className="resume-info"><a href="http://www.sydjs.com/">SydJS</a> talk</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">December 2015:</span>
              <span className="resume-info"><a href="http://www.girlgeeksydney.com/">Girl Geek Dinner</a> talk</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">November 2015:</span>
              <span className="resume-info"><a href="https://vimeo.com/154932127">CampJS Brisbane</a> talk</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">October 2015:</span>
              <span className="resume-info"><a href="http://www.meetup.com/Product-Hunt-Sydney/">Product Hunt Sydney</a> talk</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">October 2015:</span>
              <span className="resume-info"><a href="http://www.codenewbie.org/podcast/from-journalist-to-developer">CodeNewbie</a> podcast interview</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">September to December 2015:</span>
              <span className="resume-info"><a href="http://www.meetup.com/Sydney-JavaScript-Study-Group/">JavaScript Study Group</a> organiser, host and attendee</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">August 2015:</span>
              <span className="resume-info"><a href="http://www.railsgirls.com">Rails Girls</a> organiser and host</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">June 2015:</span>
              <span className="resume-info"><a href="http://railscamps.com/">Rails Camp</a> Sydney attendee</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">June 2015:</span>
              <span className="resume-info"><a href="https://www.youtube.com/watch?v=ljrvFZCuzN4&app=desktop">SydCSS</a> talk</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">May 2015:</span>
              <span className="resume-info"><a href="http://girlgeekacademy.com/shehacks/">SheHacks</a> hackathon</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">March 2015:</span>
              <span className="resume-info"><a href="http://www.railsgirls.com">Rails Girls</a> beginner mentor</span>
            </div>
          </div>
        </div>
        <div className="resume-col-2">
          <div className="resume-section">
            <h2>journo life</h2>
            <div className="resume-item">
              <span className="resume-date">January 2009 to December 2014: </span>
              <span className="resume-info">Journalist/Digital Producer, <a href="http://www.abc.net.au/news/">Australian Broadcasting Corporation</a>
              </span>
            </div>
            <div className="resume-item">
              <span className="resume-achievement">Achievement:</span>
              <span className="resume-info">Nominated for a <a href="http://www.walkleys.com/">Walkley Award</a> for Excellence in Multimedia Storytelling for producing the <a href="http://www.abc.net.au/news/factcheck/promisetracker/">Promise Tracker</a> – an interactive data visualisation project, which I led for 12 months.
              </span>
            </div>
          </div>
          <div className="resume-section">
            <h2>education</h2>
            <div className="resume-item">
              <span className="resume-date">December 2015:</span>
              <span className="resume-info"><a href="http://yowconference.com.au/">YOW!</a> conference</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">October 2015:</span>
              <span className="resume-info"><a href="https://www.webdirections.org/">Web Directions</a> conference</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">April to June 2015:</span>
              <span className="resume-info">ThoughtWorks <a href="http://levelup.thoughtworks.com/">LevelUp</a> program
              </span>
            </div>
            <div className="resume-item">
              <span className="resume-date">January to April 2015: </span>
              <span className="resume-info"><a href="https://generalassemb.ly/education/web-development-immersive">Web Development Immersive</a>, General Assembly
              </span>
            </div>
            <div className="resume-item">
              <span className="resume-date">July 2014:</span>
              <span className="resume-info">Rails Girls Next attendee
              </span>
            </div>
            <div className="resume-item">
              <span className="resume-date">January to March 2014: </span>
              <span className="resume-info"><a href="https://generalassemb.ly/education/front-end-web-development">Front-End Web Development</a>, General Assembly</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">November 2013:</span>
              <span className="resume-info">Rails Girls Beginner attendee
              </span>
            </div>
            <div className="resume-item">
              <span className="resume-date">2005 to 2008:</span>
              <span className="resume-info">Bachelor of Journalism & Bachelor of Arts, <a href="http://www.uq.edu.au/">University of Queensland</a>. I graduated with a GPA of 6 (out of 7). My Arts majors were Religion and Political Science.
              </span>
            </div>
          </div>
          <div className="resume-section">
            <h2>skills</h2>
            <div className="resume-item">
              <span className="resume-info">JavaScript | ES6 | RxJS | React | FlightJS | jQuery | HTML | CSS | Flexbox </span>
            </div>
            <div className="resume-item">
              <span className="resume-info">Python | Ruby | Rails | C# | .net | VisualStudio | SQL | Git</span>
            </div>
            <div className="resume-item">
              <span className="resume-info">Standups | Retros | Planning | Estimation </span>
            </div>
            <div className="resume-item">
              <span className="resume-info">Interviewing | Writing | Producing | Editing</span>
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
          <p>In 2016 I moved to London for a dream job as a software engineer with <a href="https://www.twitter.com/">Twitter</a>.</p>
          <p>The last few years have been the best years of my life, and that&#39;s all because I learnt to code.</p>
          <p>You can hear more about my journey from journalism to dev in my <a href="https://itunes.apple.com/gb/podcast/tech-women-australia/id1013578561?mt=2">Tech Women Australia podcast interview</a>, <a href="https://vimeo.com/154932127">CampJS Brisbane talk</a>, <a href="http://www.codenewbie.org/podcast/from-journalist-to-developer">CodeNewbie podcast interview</a>, <a href="http://www.sbs.com.au/news/article/2016/02/29/women-succeeding-increasingly-male-dominated-it-industry">SBS News interview</a> and <a href="https://www.youtube.com/watch?v=ljrvFZCuzN4&app=desktop">SydCSS talk</a>.</p>
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
      case '/about': $('body').css('background-color', '#fff'); break;
      case '/resume': $('body').css('background-color', '#fff'); break;
    }

    let Child
    switch (this.state.route) {
      case '/about': Child = About; break;
      case '/resume': Child = Resume; break;
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
