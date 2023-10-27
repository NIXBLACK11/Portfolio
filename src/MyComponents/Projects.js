import '../App.css';
import React from 'react'
import {Row,Col,Container,Button,Card} from 'react-bootstrap'
import {FaProjectDiagram} from "react-icons/fa";


export default function Projects
(props) {
  return (
    <section >
    <div variant="dark" className=' p-xl-5 mx-xl-5'>
        <>
        <Row className='justify-content-center'>
            <Col className='col-3 justify-content-center d-flex' xs={12} md={6} xl={6}>
                <h1 className='h1 banner_text2'><FaProjectDiagram className='ps-1 mx-2' size={50}/>Experience</h1>
            </Col>
        </Row>
        <Container className='rounded ' fluid>
      <Row className="bg-dark p-0 m-0 mt-5 mb-4 rounded">
			<Col className="col-3 p-0 m-0">
				<img src="ni.png" alt="la" widht="200" height="190" className="img-fluid rounded"/>
			</Col>
			<Col className="col mr-2 ms-1 pt-2">
				<h3 class="h3  py-2 banner_text2">Software Technician Intern At NI</h3>
				<h3 className="h4 text-white py-2">January 2021 - June 2021</h3>
			</Col>
		</Row>
        <Row className="bg-dark p-0 m-0 mt-5 mb-4 rounded">
			<Col className="col-3 p-0 m-0">
				<img src="ni.png" alt="la" widht="200" height="190" className="img-fluid rounded"/>
			</Col>
			<Col className="col mr-2 ms-1 pt-2">
				<h3 class="h3  py-2 banner_text2">Software Technician At NI,Bangalore</h3>
        				<h3 className="h4 text-white py-2">2021 - Present</h3>
			</Col>
		</Row>
    </Container>
</>
    </div>
    </section>
  )
}