import './footer.scss';
import {Help, Copyright, About, Contact, Conditions} from './footer-components'
import React from 'react';
import { Navbar} from 'reactstrap';



const Footer = props => (  
  <Navbar className="footer-navbar  text-white">
        <div className="pt-3">       
            <Copyright />
        </div>
        <div className="d-flex justify-content-end">
        <div>        
            <Contact />                
        </div>
        <div >       
            <About />        
        </div>
        <div >       
            <Conditions />        
        </div>
        <div>        
            <Help />                
        </div>
        </div>
  </Navbar>  
);

export default Footer;
