import About from "./About/About";
import Contact from "./contact/Contact";
import Experience from "./Experience/Experience";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import Project from "./Project/Project";
function App() {
  return (
    <>
      <div className="app lg:my-0 lg:mx-auto md:my-0 md:mx-auto my-0 mx-auto">
        <Header />
        <Nav />
        <About />
        <Experience />
        <Project />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
export default App;
