import React, {Component} from 'react';
import {render} from 'react-dom';
import '../sass/app.scss';
import Logo from '../assets/images/relectron-logo.jpg';

export default class App extends Component {
  render() {
    return (
      <div>
        <img className='logo' src={Logo} alt='Relectron Boilerplate'/>
        <h1>Welcome to Relectron.</h1>
        <p>A barebones Electron boilerplate with Webpack 2, React, and SASS
          (Normalize.css) support</p>
      </div>
    );
  }
}

render(
  <App/>, document.getElementById('app'));