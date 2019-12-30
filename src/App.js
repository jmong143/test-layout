import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import '../src/css/bootstrap.min.css';
import HomepageComponent from './Homepage';
import GalleryComponent from './Gallery';
import MessageComponent from './Message';
import NavbarComponent from './Layouts/Navbar';

function App() {
  
  return (

    <Router>
      <div>
        <NavbarComponent/>
        <Switch>
          <Route exact path="/">
            <HomepageComponent/>
          </Route>
          <Route path="/gallery">
            <GalleryComponent/>
          </Route>
          <Route path="/message">
            <MessageComponent/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
