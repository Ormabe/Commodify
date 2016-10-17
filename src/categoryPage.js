// React Import
import React from 'react'
import {Link} from 'react-router'

// CSS Import
import 'bootstrap/dist/css/bootstrap.css';

// Data Import
import data from './data.js'

// Page Styling Import
import Masonry from 'react-masonry-component';

var CategoryPage = React.createClass({

    render: function () {
      let category = this.props.params.category;
      let categoryTitle = category
      let itemsArr = data[category + 'Get']()
      let categoryResults = [];
      // const Grid = measureItems(CSSGrid)

      //Checking if itemsArr contains items and routing to category data with link to product.jsx page.
      if(itemsArr.length > 0) {
        categoryResults.push(itemsArr.map(
          function(element, index){
            return (
              <div key={index}>
                <div><li className={"image-element-class " + category}> 
                  <Link to={category + '/' + element.id}><img className={category + index} alt={element.id} src={element.image}></img></Link> 
                      <p className={"imageText " + category + index}>{element.name}<br />${element.price}</p> </li></div></div>
        )}))
      }
      categoryTitle.charAt( categoryTitle.length-1 ) === "s" ?
      categoryTitle = categoryTitle.slice(0, -1) : null;
        return (
    			<div className="container">
            <h1 className='title'>{categoryTitle[0].toUpperCase() + categoryTitle.substring(1, categoryTitle.length) +" Commodities"}</h1>
            <Masonry>
                {categoryResults}
            </Masonry>
    			</div>
        );
    }
});

export default CategoryPage;
