import React from 'react';
import './App.css';
import Navy from './components/my-navbar/Nav';
import Carousel from './components/Carousel/Carousel';
import Message from './components/Title/Message';
import About from './pages/About/About';
import Fade from 'react-reveal/Fade';
import { Parallax } from 'react-parallax';
import Container from 'react-bootstrap/Container';
import Skills from './pages/Skills/Skills';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import Particles from 'react-particles-js';
import { particlesOptions } from './particlesOptions';

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
    <Navy />
    <Carousel />
    <Message />
    <Particles
        className="particles particles-box"
        params={particlesOptions}
      />

    { /* About me section */ }

    <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
    <Container className="container-box rounded">
      <Fade duration={500}>
    <About />
    </Fade>
    </Container>
    </Parallax>
    </div>

    { /* Skill section */ }

    <div>
       <Container className='container-box rounded'>
        <Fade duration={500}>
         <Skills />
        </Fade>
       </Container>
    </div>

    { /* Contact section */ }

         <Container className="container-box rounded">
         <Fade duration={500}>
         <hr />
         <Contact />
         </Fade>
         </Container>

    { /* Footer section */ }    

         <hr />
         <Footer />
    </div>
  );
};

export default App;
