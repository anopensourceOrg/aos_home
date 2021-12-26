import './App.css';
import ImageContainer from './components/ImageContainer';
import bg1 from "./images/homescreen2.jpg";
import Navbar from './components/Navbar';
import Description from './components/Description';
import React, { useState, useEffect } from 'react';
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
      console.log(window.scrollY, navRef.current.getBoundingClientRect().height)
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
    </div>
  );
}

export default App;
