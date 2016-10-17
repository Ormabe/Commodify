// React Import
import React from 'react'

// CSS Import
import 'bootstrap/dist/css/bootstrap.css';

var FAQ = React.createClass({
	render(){
		return(
			<div className="FAQ container">
			 	<div className="row">
	   				<div className="col-sm-8">
						<h1>Frequently Asked Questions</h1>
					
							<p className="question">What is COMMODiFi?</p>
								<p>COMMODiFi is our attempt to draw attention to exorbitant prices for everyday commodities. Rather than wasting your money on this nonsense, please support these excellent organizations instead.</p>

							<p className="question">Where did the idea come from?</p>
								<p>From sleep-deprived junior fullstack web developers. Pls send coffee.</p>

							<p className="question">Are you hiring?</p>
								<p>Not at the moment but we would love to get hired! Check us out on Github:</p>

									<ul className='github-list'>
										<li><a href="https://github.com/Nasita-Haque">Nasita Haque</a></li>
										<li><a href="https://github.com/Gabemb">Gabriel Barriga</a></li>
										<li><a href="https://github.com/Ormabe">Rabiya Watson-Maiorana</a></li>
										<li><a href="https://github.com/craig91">Craig Dejean</a></li>
									</ul>
							</div>	
					</div>
			</div>
		)
	}
})

export default FAQ; 