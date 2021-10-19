import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './Contexts/AuthProvider';
import Details from './Pages/Home/Details/Details';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Register from './Pages/Register/Register';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/NotFound/NotFound';
import About from './Pages/Home/About/About';
import Emergency from './Pages/Home/Emergency/Emergency';
function App() {
  return (
    <div className="App">
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
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path="/appoinment">
              <Emergency></Emergency>
            </Route>
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
    </div>
  );
}

export default App;
