// React Import
import React from 'react';

// Data Import
import data from './data.js';

const Product = React.createClass({
	getInitialState(){
		return {name: "", image: "", description: "", price: "", nonprof: {}}
	},
	componentWillMount(){
		//Getting the current category path so we can filter through the appropriate array
		let category = this.props.params.category;
		//Getting our route name so we can render the right product 
		let prodID = this.props.params.id;
		let product = data[category + "Get"]().filter(prodObj => prodID === prodObj.id ? prodObj : null);

		let nonprof = data.getNonprofs().filter( np => np.id.toLowerCase() === category ? np : null);

		this.setState({name: product[0].name, image: product[0].image, description: product[0].description, price: product[0].price, nonprof: nonprof});
	},
	render() {
		return (
			<div className="product">
				<h1>{this.state.name}</h1>
					
					<img src={this.state.image} alt={this.state.name}></img>

					<p className="productP">{this.state.description}</p>

					<h3 className="price">${this.state.price}</h3> <button className="buy">Add to Cart</button>

					<br/>

					<p className="productP">Support <a href={this.state.nonprof[0].url}>{this.state.nonprof[0].name}</a> instead of throwing your money away.</p>
			</div>
		)
	}
});

export default Product;