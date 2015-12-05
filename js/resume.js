var Resume = React.createClass({
  render (){
    return (
    	<div>
    		<h2>Resume</h2>
    		<a className="resume-download-link" href="/files/Amy-Simmons-Resume-April-2015.pdf" download>Download my resume</a>
    	</div>
    )
  }
});

ReactDOM.render(
  <Resume />, document.getElementById('resume')
);