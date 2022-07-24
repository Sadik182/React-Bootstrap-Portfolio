import React from 'react';
import './About.css';
import { Button, Container } from 'react-bootstrap';
import aboutImage from '../../images/about.png';

const About = () => {
    return (
        <div id='about'>
            <Container>
                <div className='row d-flex justify-content-center align-content-center py-5'>
                    <div className='col-lg-4 col-md-4 col-sm-12 '>
                        <img className='w-100 ' src={aboutImage} alt="" />
                    </div>
                    <div className='col-lg-8 col-md-8 col-sm-12'>
                        <h1>About Me</h1>
                        <h3>I am a MERN Stack Developer</h3>
                        <p>I am a Student and Web developer with the ability to learn and collaborate in rapidly changing environments and compositions. Looking for a position where I can utilize my ability and knowledge to enhance my career in the field of Web development. Learning JavaScript, React.js, and Node.js. Eager to tackle Web development challenges to achieve lasting impacts in user experience.</p>
                        <Button className='me-4'>Hire Me</Button>
                        <Button>Download CV</Button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;