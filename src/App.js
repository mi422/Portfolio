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

const App = () => {
  return (
    <div>
    <Navy />
    <Carousel />
    <Message />
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
    <Skills />
    </div>
  );
}

export default App;
