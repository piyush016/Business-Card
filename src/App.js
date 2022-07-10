import React from 'react'
import './style.css'
import About from './About'
import Info from './Info'
import Interest from './Interest'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <div className="MainBox">

        {/* Photo, name, buttons */}
        <Info /> 

        <About />
        
        <Interest />
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
