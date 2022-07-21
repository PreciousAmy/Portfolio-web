import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Socials from "./Components/Socials";
import Portfolio from "./Components/Portfolio";
import Services from "./Components/Services";
import Contact from "./Components/Contact"
import Footer from "./Components/Footer";


function App() {
  return (
    <div>
      <NavBar />
       <Home /> 
       <About />
       <Services />
       <Portfolio />
       <Contact />

       <Socials />
       <Footer />

     
    </div>
  );
}

export default App;
