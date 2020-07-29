import React, {Component} from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Title from './components/Title';
import {SearchForm} from './components/SearchForm'
import { render } from '@testing-library/react';

import {Detail} from './pages/Detail'
import {MoviesList} from './components/MovieList'

class App extends Component {
  state ={ usedSearch:false, results : []}

  _handleResults= (results) => {
    this.setState ({results, usedSearch: true})
  }
  _renderResults () {
    return this.state.results.length === 0
      ? <p>Sin resultado</p>
      : <MoviesList movies ={this.state.results} />
  }
 render () {
  const url = new URL (document.location)
  const hasID = url.searchParams.has ('id')

  if (hasID) {
   return <Detail id= {url.searchParams.get('id')}/>
  }

  return (

    
    <div className="App">
      <Title> search movies </Title>
      <div className='SearchForm-wrapper'>
         <SearchForm onResults= {this._handleResults}/>
      </div>
      {this.state.usedSearch 
        ? this._renderResults ()
        : <small> Use the form to seach a movie</small>}
  
    </div>
  );
}
}


export default App;
