import React from 'react';

import {NavLink} from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export const Copyright = props => (
  <div className="d-flex align-items-center text-white">
    <p>Copyright©2021</p>
  </div>
);
export const About = props => (   
    <NavLink tag={Link} to="/about" className="d-flex align-items-center text-white"> 
      <FontAwesomeIcon icon="list" />     
      <span className="ml-2">About the company</span>
    </NavLink>  
);
export const Conditions = props => (  
  <NavLink tag={Link} to="/conditions" className="d-flex align-items-center text-white"> 
    <FontAwesomeIcon icon="list" />     
    <span className="ml-2">Conditions</span>
  </NavLink>  
);
export const Help = props => (  
    <NavLink tag={Link} to="/help" className="d-flex align-items-center text-white"> 
      <FontAwesomeIcon icon="list" />     
      <span className="ml-2">Help</span>
    </NavLink>  
);
export const Contact = props => (  
  <NavLink tag={Link} to="/contact" className="d-flex align-items-center text-white"> 
    <FontAwesomeIcon icon="list" />     
    <span className="ml-2">Contact</span>
  </NavLink>  
);

