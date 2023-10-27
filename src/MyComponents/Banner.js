import '../App.css';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import React from 'react'
import {Row,Col,Container,Nav} from 'react-bootstrap'
import Typical from "react-typical";
import {FaGithub,FaTwitter,FaLinkedin,FaHackerrank,FaCode} from "react-icons/fa";

// import {FaEnvelope, FaHeart} from "react-icons/fa";


export default function Banner
(props) {
  const options = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: ["#e78ea7", "#e78ea7", "#e78ea7", "#e78ea7"]
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.4
      },
      size: {
        value: { min: 1, max: 8 }
      },
      links: {
        enable: true,
        distance: 150,
        color: "#808080",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 5,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out"
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab"
        },
        onClick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1
          }
        },
        push: {
          quantity: 4
        }
      }
    }
  };
 
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  return (
    <section >
      {/* <Particles options={options} init={particlesInit} /> */}
    <div variant="dark">
        <>
        {/* className='mt-5 pt-5 mb-5 pb-5' */}
        <Container className='mt-5 pt-5 '>
      <Row className=' mt-4 pt-4'>
        <Col className='col-6 align-items-center mt-5 ' xs={12} md={6} xl={6}>
          {/* <p><FaHeart size={70}/></p> */}
          <div className='mt-5'>
          <h1 className='h1 banner_text font-link give_head'>Hi,</h1>
          <h1 className='h1 banner_text font-link give_head'>My name is Shraddha Rana</h1>
          <h1 className='h1 banner_text give_head font-link'>I'm A 
          <Typical
              loop={Infinity}
              wrapper="b"
              className="h1 banner_text give_head font-link"
              steps={[
                ' Software Technician 🛰️',
                5000,
                ' Java Developer 💻',
                5000,
                ' Python Developer 🥇',
                5000,
                ' Student 🎓',
                5000
              ]}
            />
          </h1>
          </div>
          <div className='d-flex'>
          <Nav.Link href="https://twitter.com/Shraddha__Rana?t=2LPUc0rZzgZv8ni7U46zbg&s=08" target="_blank" className='mx-4'>
            <FaTwitter className='navtext' size={45}/>
        </Nav.Link>
        <Nav.Link href="https://www.linkedin.com/in/shraddha-rana-057ba9189/" target="_blank" className='mx-4'>
        <FaLinkedin className='navtext' size={45}/>
        </Nav.Link>
        <Nav.Link href="https://shraddha-portfolio.netlify.app" target="_blank" className='mx-4'>
        <FaCode className='navtext' size={45}/>
        </Nav.Link>
        </div>
        </Col>
        <Col className='col-6 justify-content-center text-center mt-5 mb-5 pb-5' xs={12} md={6} xl={6}>
        <img
          alt="logo"
          src="photo.png"
          className="image vert-move img-fluid"
        />
        </Col>
      </Row>
    </Container>
</>
    </div>
    </section>
  )
}