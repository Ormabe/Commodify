import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router'
{/*import $ from 'jquery'*/}

{/*import ReactCSSTransitionGroup from 'react-addons-css-transition-group'*/}
import { Nav, Navbar, NavItem} from 'react-bootstrap';
import './App.css';

var NavBar = React.createClass({
  getInitialState: function(){
      return {searchString: ''};
  },
  handleKeyPress (event) {
    if (event.key === 'Enter') {
      this.filteredInput() //Call this like a function
    }
  },
  handleChange: function(event){
    var input = event.target.value

      this.setState({searchString: input});
  },
  filteredInput: function () {
    var get = [...data.waterGet(),...data.airGet(),...data.honeyGet(),...data.seedsGet(),...data.grainsGet()]

  var searchData = get.map(function (v,i,arr){
    return {category: v.category, id: v.id, name: v.name, description: v.description}
    })

        var searchString = this.state.searchString.trim().toLowerCase();

        if(searchString.length > 0){

      var filteredData = searchData.filter(function(l){
              return l.name.toLowerCase().match( searchString ) || l.description.toLowerCase().match( searchString );
              });
          }

  this.setState({filteredData: filteredData})        
    return (
      <div>
  {filteredData.map(function(element,index){
               return <li key={element.id}><Link to={element.category + '/' + element.id}>{element.name}</Link></li>
            }) }
      </div>
    )        
  },
  render: function () {
    return (
      <div>
      <Navbar id="navColor">
          <Navbar.Header>
            <Navbar.Brand>
              <Link className="navbar-brand navImg" to="/">Commodifi Logo</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1}><Link to="air">AIR</Link></NavItem>
              <NavItem eventKey={2}><Link to="honey">HONEY</Link></NavItem>
              <NavItem eventKey={3}><Link to="grains">GRAINS</Link></NavItem>
              <NavItem eventKey={4}><Link to="seeds">SEEDS</Link></NavItem>
              <NavItem eventKey={5}><Link to="water">WATER</Link></NavItem>
            </Nav>
            <Navbar.Form pullRight className="searchRow">
          <input onKeyPress={this.handleKeyPress} id="find" type="text"></input>
            <button onClick={this.filteredInput}>
              <i className="fa fa-search"></i>
            </button>
            </Navbar.Form>
          </Navbar.Collapse>
        </Navbar>
        </div>
    )

  }
})
export default NavBar
