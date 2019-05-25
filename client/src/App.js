import React from 'react';
import logo from './logo.svg';
import './App.sass';


import Navbar from 'components/Navbar/Navbar';
import Hero from 'containers/Hero/Hero';
import Value1 from 'containers/Value1/Value1';

function App() {
  return (
    <div className="App">
	    <Navbar/>
	    <div className="contentBody">
		    <Hero/>
		    <Value1/>
	    </div>
    </div>
  );
}

export default App;
