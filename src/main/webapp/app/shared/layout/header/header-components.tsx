import React from 'react';

import { NavItem, NavLink, NavbarBrand } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import appConfig from 'app/config/constants';

export const BrandIcon = props => (
  <div {...props} className="brand-icon mr-5">
    <img src="content/images/_logo.png" alt="Logo" />
  </div>
);

export const Brand = props => (
  <NavbarBrand tag={Link} to="/" className="brand-logo">
    <BrandIcon />
    <span className="brand-title">Demo Store</span>
    <span className="navbar-version">{appConfig.VERSION}</span>
  </NavbarBrand>
);

export const Home = props => (
  <NavItem>
    <NavLink tag={Link} to="/" className="d-flex align-items-center">
      <FontAwesomeIcon icon="home" />
      <span>Home</span>
    </NavLink>
  </NavItem>
);

export const Cart = props => (
  <NavItem>
    <NavLink tag={Link} to="/cart" className="d-flex align-items-center">
      <FontAwesomeIcon icon="shopping-cart" />
      <span>My Cart</span>
    </NavLink>
  </NavItem>
);

export const Orders = props => (
  <NavItem>
    <NavLink tag={Link} to="/orders" className="d-flex align-items-center">
      <FontAwesomeIcon icon="list" />
      <span>My Orders</span>
    </NavLink>
  </NavItem>
);
