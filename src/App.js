import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Account from './components/Account';
import Quote from './components/Quote';
import Softwares from './components/Softwares';
import Websites from './components/Websites';
import Applications from './components/Applications';
import Clouddata from './components/Clouddata';
import Contact from './components/Contact';
import Blockchain from './components/Blockchain';
import Ecommerce from './components/Ecommerce';
import Debugging from './components/Debugging';
import Portfolio from './components/Portfolio';
import Contents from './components/Contents';
import About from './components/About';
import Blog from './components/Blog';
import Utilities from './components/Utilities';


function App() {
  return (
    <Router>
       <Header />
      <div className="App">        
       
        <Switch>
            <Route path="/websites">
                <Websites />  
            </Route>
            <Route path="/software">
                <Softwares />  
            </Route>
            <Route path="/applications">
                <Applications />  
            </Route>
            <Route path="/data">
                <Clouddata />  
            </Route>
            <Route path="/utilities">
                <Utilities />  
            </Route>

            <Route path="/contact">
                <Contact />  
            </Route>

          <Route path="/account">
                <Account />  
            </Route>
            
            <Route path="/quote">
                <Quote />  
            </Route>
            <Route path="/blockchain">
                <Blockchain />  
            </Route>
            <Route path="/blog">
                <Blog />  
            </Route>
            <Route path="/ecommerce">
                <Ecommerce />  
            </Route>
            <Route path="/debug">
                <Debugging />  
            </Route>
            <Route path="/portfolio">
                <Portfolio />  
            </Route>
            <Route path="/contents">
                <Contents/>  
            </Route>
            <Route path="/about">
                <About/>  
            </Route>

           

            <Route path="/">
                <Home />  
            </Route>

        </Switch>



       
      </div>
    </Router>
  );
}

export default App;
