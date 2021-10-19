import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Emergency from '../Emergency/Emergency';
import Services from '../Services/Services';

const Home = () => {
  return (
      <Router>
        <Switch>
          <Route path='/'>
          <Banner></Banner>
          <Services></Services>
          <Emergency></Emergency>
          <Footer></Footer>
          </Route>
        </Switch>
      </Router>

  );
};

export default Home;