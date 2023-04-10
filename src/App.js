import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Slideshow from "./components/Slideshow";
import Snorkeling from "./components/Snorkeling";
import Footer from "./components/Footer";

import  "./styles/header.css"
import "./styles/Navbar.css"
import "./styles/slideshow.css"
import'./styles/snorkeling.css'
import'./styles/footer.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Slideshow/>
      <Snorkeling/>
      <Footer/>
      
    </div>
  );
}

export default App;