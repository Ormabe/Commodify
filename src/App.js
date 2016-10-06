import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import NavBar from './navigation'
import Footer from './footer'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import CategoryPage from './categoryPage'
import Product from './Product.jsx'
import HomePage from './HomePage'
import FAQ from './FAQ.js';
import Contact from './Contact.js'
import About from './About.js'
import NonProfits from './Nonprofits.jsx'


var App = React.createClass({
  render: function () {
    return (
      <div>
        <NavBar />
        {this.props.children}
         <Footer />
      </div>
    )
  }
})



ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
      <Route path='/company/faq' component={FAQ}></Route>
      <Route path='/company/about' component={About}></Route>
      <Route path='/company/nonprofits' component={NonProfits}></Route>
      <Route path='/company/contact' component={Contact}></Route>
      <Route path=":category" component={CategoryPage}></Route>
      <Route path='/:category/:id' component={Product}></Route>
    </Route>
  </Router>
,document.getElementById('root'));

