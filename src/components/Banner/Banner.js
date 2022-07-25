import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGoogle, faFacebook, faGithub, faTwitter, faFacebookF, faLinkedinIn, faGithubAlt} from '@fortawesome/free-brands-svg-icons'
import { faCoffee} from '@fortawesome/free-solid-svg-icons'
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import bannerImg from '../../images/sadik.png';
import './Banner.css';

const Banner = () => {
    return (
        <Container>
            <div className='row d-flex justify-content-center align-items-center'>
            <div className="col-lg-8 col-md-8 col-sm-12">
                <h1 className="fw-bold fs-1">This is Md. Sadikur Rahman</h1>
                <h3 className="fw-bold fs-3">Jr. Software Engineer</h3>
                <h3>I am working as a MERN Stack Developer</h3>
                <div className="d-flex icon fs-5 py-3">
                    <a href="#"><FontAwesomeIcon icon={faFacebookF}/></a>
                    <a href="#"><FontAwesomeIcon icon={faGithub}/></a>
                    <a href="#"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                    <a href="#"><FontAwesomeIcon icon={faTwitter}/></a>
                </div>
                <div className="d-flex py-4">
                <Button href="" variant='primary' size='lg' className="me-4">Hire Me</Button>
                <Button href="" variant='primary' size='lg'>Download CV</Button>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
               <div className='py-5'>
                 <img src={bannerImg} alt="" />
               </div>
            </div>
        </div>
        </Container>
    );
};

export default Banner;