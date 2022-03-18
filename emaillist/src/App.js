import React from 'react';
import './assets/scss/App.scss';
import {RegisterForm} from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';
import Email from './Email';

const App = () => {
  return (
      <div className={'App'}>
        <RegisterForm/>
        <SearchBar />
        <Emaillist />
        <Email/>
      </div>
    )
}

export default App;