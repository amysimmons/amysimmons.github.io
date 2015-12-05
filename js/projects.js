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

ReactDOM.render(
  <Projects />, document.getElementById('projects')
);