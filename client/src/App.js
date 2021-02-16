import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import Events from './components/EventsComponent';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Main /> 
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
