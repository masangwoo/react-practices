import React from 'react';
import './assets/scss/App.scss';
import {RegisterForm} from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';
import Data from './assets/json/data.json'

const App = () => {
  return (
      <div className={'App'}>
        <RegisterForm/>
        <SearchBar />
        <Emaillist emails={Data} />
        
      </div>
    )
}

export default App;