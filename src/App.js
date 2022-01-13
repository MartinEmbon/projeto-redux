import './App.css';
import LeftBar from './components/LeftBar/LeftBar';
import TopBar from './components/TopBar/TopBar';
import Home from "./pages/Home/Home";


const App = () => {
  return (
    <>
      <TopBar/>
      <div className="App">
      <LeftBar/>
      <Home/>
    </div>
    </>
  )
}

export default App
