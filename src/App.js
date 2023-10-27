import './App.css';
import Header from './MyComponents/Header';
import Banner from './MyComponents/Banner';
import About from './MyComponents/About';
import Skills from './MyComponents/Skills';
import Education from './MyComponents/Education';
import Projects from './MyComponents/Projects';
import Footer from './MyComponents/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div style={{ backgroundColor: "#FFC8D8" }}>
      <section className="container-fluid back " id="Home" style={{  backgroundColor: "#FFC8D8" }}>
        <Header></Header>
        <Banner></Banner>
      </section>
      <section className="container-fluid back" id="About" style={{ backgroundColor: "#FFC8D8" }}>
        <About></About>
      </section>
      <section className="container-fluid back" id="Skills" style={{ backgroundColor: "#FFC8D8" }}>
        <Skills></Skills>
      </section>
      <section className="container-fluid back" id="Education" style={{ backgroundColor: "#FFC8D8" }}>
        <Education></Education>
      </section>
      <section className="container-fluid back" id="Projects" style={{ backgroundColor: "#FFC8D8" }}>
        <Projects></Projects>
      </section>
      <section className="container-fluid back" id="Footer">
        <Footer></Footer>
      </section>
    </div>
  );
}

export default App;