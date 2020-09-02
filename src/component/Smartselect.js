import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Route, withRouter} from 'react-router-dom';
// const Countries = 'http://13.57.235.126:5000/countries';
import Countrie from './Countrie'; 
class Smartselect extends Component{
  constructor() {
    super();
    this.state = {
      countires: [],
    };
  }
    
componentDidMount() {
  let initialCountries = [];
  fetch('http://13.57.235.126:5000/countries')
      .then(response => {
          return response.json();
      }).then(data => {
        initialCountries = data.results.map((countrie) => {
          return countrie
      });
      console.log(initialCountries);
      this.setState({
        countrie: initialCountries,
      });
  });
}
render() {
  return (
              <Countrie state={this.state}/>
  );
}
}

export default Smartselect