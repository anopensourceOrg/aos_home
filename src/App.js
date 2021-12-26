import './App.css';
import ImageContainer from './components/ImageContainer';
import bg1 from "./images/homescreen2.jpg";
import bg3 from "./images/bg3.png";
import Navbar from './components/Navbar';
import Description from './components/Description';
import React, { useState, useEffect } from 'react';
import Services from './components/Services';


const floatingNav = {
  position: 'sticky',
  top: '0px',
  background: '#222',
  width: '100%',
  zIndex: '10000',
  boxShadow:'0px 0px 4px 1px #333'
}
function App() {
  const [isFloatingNav, setIsFloatingNav] = useState(false);
  const navRef = React.createRef();
  window.addEventListener('scroll', () => {
    if (navRef.current) {
      if (window.scrollY > navRef.current.getBoundingClientRect().height) {
        setIsFloatingNav(true);
      } else {
        setIsFloatingNav(false);
      }
    }
  })

  useEffect(() => {
  }, [])
  return (
    <div className="App">
      {(isFloatingNav ? <Navbar style={floatingNav} /> : null)}
      <ImageContainer bg={bg1} style={{ 'color': 'white','minHeight':'70vh'}}>
        <Navbar ref={navRef} />
        <Description />
      </ImageContainer>
      <Services/>
      <ImageContainer bg={bg3} style={{'color':'white'}}>
        <div style={{background:"#000A",padding:'10px'}}>
          
        <h1 style={{margin:'10px 0px'}}>Why select us ?</h1>
        <h3 style={{fontWeight:400, textAlign:'left',padding:"0px 3vw",lineHeight:'2rem',margin:"auto"}}>
          We are a team of people filled with creativity, imagination and innovation. We will deep dive into your requirements to fullfill your needs and provide you the best possible solution at the most affordable price. Our team has the potential skills and the knowledge to give you the best and the updated tech solution for your need. We will help you achieve the exponential growth of your business by offering you the latest tools which you need.
        </h3>
        </div>
      </ImageContainer>
    </div>
  );
}

export default App;
