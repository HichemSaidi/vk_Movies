import './App.css';
import './components/Navbar'
import Navbar from './components/Navbar';
import Cover from './components/Cover';
import Toprated from './components/Toprated';
import Topratedbubble from './components/Topratedbubble.js';
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Cover></Cover>
     <Toprated></Toprated>
     <Footer></Footer>
    </div>
  );
}

export default App;
