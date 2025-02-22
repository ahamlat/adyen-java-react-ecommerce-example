import React from 'react';
import { Switch,Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import Login from 'app/modules/login/login';
import Register from 'app/modules/account/register/register';
import Activate from 'app/modules/account/activate/activate';
import PasswordResetInit from 'app/modules/account/password-reset/init/password-reset-init';
import PasswordResetFinish from 'app/modules/account/password-reset/finish/password-reset-finish';
import Logout from 'app/modules/login/logout';
import Home from 'app/modules/home/home';
import Entities from 'app/entities';
import PrivateRoute from 'app/shared/auth/private-route';
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';
import PageNotFound from 'app/shared/error/page-not-found';
import { AUTHORITIES } from 'app/config/constants';
import Cart from './modules/cart/cart';
import Conditions from './modules/conditions/conditions';
import Help from './modules/help/help';
import Contact from './modules/contact/contact';
import Checkout from './modules/checkout/checkout';
import CheckoutStatus from './modules/checkout/checkout-status';
import Orders from './modules/orders/orders';


const Account = Loadable({
  loader: () => import(/* webpackChunkName: "account" */ 'app/modules/account'),
  loading: () => <div>loading ...</div>,
});

const Admin = Loadable({
  loader: () => import(/* webpackChunkName: "administration" */ 'app/modules/administration'),
  loading: () => <div>loading ...</div>,
});

const Routes = () => (
  <div className="view-routes">
    <Switch>
      <ErrorBoundaryRoute path="/login" component={Login} />
      <ErrorBoundaryRoute path="/logout" component={Logout} />
      <ErrorBoundaryRoute path="/conditions" exact component={Conditions} />
      <ErrorBoundaryRoute path="/account/register" component={Register} />
      <ErrorBoundaryRoute path="/account/activate/:key?" component={Activate} />
      <ErrorBoundaryRoute path="/account/reset/request" component={PasswordResetInit} />
      <ErrorBoundaryRoute path="/account/reset/finish/:key?" component={PasswordResetFinish} />
      <PrivateRoute path="/admin" component={Admin} hasAnyAuthorities={[AUTHORITIES.ADMIN]} />
      <PrivateRoute path="/account" component={Account} hasAnyAuthorities={[AUTHORITIES.ADMIN, AUTHORITIES.USER]} />
      <ErrorBoundaryRoute path="/" exact component={Home} />
      <PrivateRoute path="/cart" exact component={Cart} hasAnyAuthorities={[AUTHORITIES.ADMIN, AUTHORITIES.USER]} />
      <PrivateRoute path="/orders" exact component={Orders} hasAnyAuthorities={[AUTHORITIES.ADMIN, AUTHORITIES.USER]} />
      <PrivateRoute path="/checkout" exact component={Checkout} hasAnyAuthorities={[AUTHORITIES.ADMIN, AUTHORITIES.USER]} />
      <PrivateRoute path="/checkout/status/:type" component={CheckoutStatus} hasAnyAuthorities={[AUTHORITIES.ADMIN, AUTHORITIES.USER]} />
      <ErrorBoundaryRoute path="/contact" exact component={Contact} />
      <ErrorBoundaryRoute path="/help" exact component={Help} />
      <PrivateRoute path="/" component={Entities} hasAnyAuthorities={[AUTHORITIES.USER]} />
      <ErrorBoundaryRoute component={PageNotFound} />

    </Switch>
  </div>
);

export default Routes;
