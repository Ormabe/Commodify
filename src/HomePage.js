// React Import
import React from 'react'

// Carousel Import
import Carousel from './carousel'

var HomePage = React.createClass({
	render(){
		return (
			<div className="homepage">
				<h1>Premium Commodities</h1>
				<div className='commodityImg'>
					<img className="home" src="http://www.optionsellers.com/wp-content/uploads/blog-4commodities.jpg" alt="Commodities" />
				</div>
			</div>
		)
	}
})

export default HomePage