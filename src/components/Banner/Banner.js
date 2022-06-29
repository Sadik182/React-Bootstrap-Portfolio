import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import bannerImg from '../../images/sadik.png';

const Banner = () => {
    return (
        <Container>
            <div className='row d-flex justify-content-center align-items-center'>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <h1>This is Md. Sadikur Rahman</h1>
                <h3>Jr. Software Engineer</h3>
                <h3>I am working on MERN Stack</h3>
                <ul>
                    <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                </ul>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
               <div className='py-5'>
                 <img className='rounded' src={bannerImg} alt="" />
               </div>
            </div>
        </div>
        </Container>
    );
};

export default Banner;