import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Emergency from '../Emergency/Emergency';

const Home = () => {
  return (
      <Router>
        <Switch>
          <Route path='/'>
          <Banner></Banner>
          <Footer></Footer>
          <Emergency></Emergency>
          </Route>
        </Switch>
      </Router>

  );
};

export default Home;