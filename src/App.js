import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './Contexts/AuthProvider';
import Details from './Pages/Home/Details/Details';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Register from './Pages/Register/Register';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/NotFound/NotFound';
import About from './Pages/Home/About/About';
import Appoinment from './Pages/Home/Appoinment/Appoinment';
function App() {
  return (
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/register'>
              <Register> </Register>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <PrivateRoute path="/appoinment">
            <Appoinment> </Appoinment>
            </PrivateRoute>
            <PrivateRoute path='/service/:id'>
              <Details></Details>
            </PrivateRoute>
            <PrivateRoute path='/services'>
              <Services></Services>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
  );
}

export default App;