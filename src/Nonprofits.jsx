// React Import
import React from 'react';

// Data Import
import data from './data.js';

const NonProfits = React.createClass({
	getInitialState(){
		return {orgs: data.getNonprofs()}
	},
	render(){
		let stuff = this.state.orgs.map(npObj => <div key={npObj.name}> <h3>{npObj.id}</h3> <br/> <p>{npObj.awareness}</p> <br/> <a href={npObj.url}>{npObj.name}</a> <br/> <p>{npObj.description}</p> </div>)
		return (
			<div className='nonprofits'>
				<h1>Don't waste your money on our overpriced garbage. Support these great Non-Profit organizations instead!</h1>
						{stuff}
			</div>
		)
	}
});

export default NonProfits;