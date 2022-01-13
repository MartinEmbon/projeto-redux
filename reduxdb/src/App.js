import React from 'react'
import LeftBar from './components/LeftBar/LeftBar'
//import TopBar from "./components/TopBar/TopBar"
import Home1 from './pages/Home/Home1'
import "./App.css"
import TopBar from "./components/TopBar/TopBar"

const App = () => {
  return (
    <>    
    <TopBar/>
    <div className="App">    
      <LeftBar/>
      <Home1/>
    </div>
    </>
    
  )
}

export default App
