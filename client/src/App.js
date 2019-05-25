import React from 'react';
import logo from './logo.svg';
import './App.sass';


import Navbar from 'components/Navbar/Navbar';
import Hero from 'containers/Hero/Hero';
import Value1 from 'containers/Value/Value1';
import Value2 from 'containers/Value/Value2';
import Value3 from 'containers/Value/Value3';
import Footer from 'components/Footer/Footer.js';
import ContactForm from 'components/ContactForm/ContactForm';

function App() {
  return (
    <div className="App">
	    <Navbar/>
	    <div className="contentBody">
		    <Hero/>
		    <Value1/>
		    <Value2/>
		    <Value3/>
		    <ContactForm/>
	    </div>
	    <Footer/>
    </div>
  );
}

export default App;
