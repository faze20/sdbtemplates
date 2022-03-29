import React  from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Routes , Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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
import TermsandConditions from './components/TermsandConditions';
import Privacypolicy from './components/Privacypolicy';
import Register from './components/Register';
import Forgotpassword from './components/Forgotpassword';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Payment from './components/Payment';

function App() {
    return (
        <>
        <Router>
        <Header  />
        <div className="App">        
        
            <Routes>
                <Route path="/websites" element={<Websites />} />
                    
                <Route path="/software" element={ <Softwares />} />
                    
                    
                <Route path="/applications" element={<Applications />} />
                    
                    
                <Route path="/data"  element={ <Clouddata /> } />
                    
                    
                <Route path="/utilities"  element={ <Utilities />} />
                    
                    

                <Route path="/contact"  element={ <Contact /> } />
                    
                    

                 <Route path="/account"  element={ <Account /> } />
                
                    
            
                <Route path="/quote"  element={ <Quote />} />
                
                    
                <Route path="/blockchain"  element={ <Blockchain /> } />
                
                    
                <Route path="/blog"  element={ <Blog /> } />
                
                    
                <Route path="/ecommerce"  element={<Ecommerce /> } />
                
                    
                <Route path="/debug"  element={<Debugging /> } />
                
                    
                <Route path="/portfolio" element={ <Portfolio /> } />
                    
                <Route path="/contents"  element={ <Contents/>} />
                
                    
                <Route path="/about"  element={ <About/> } />
                
                    
                <Route path="/forgotpassword"  element={ <Forgotpassword />} />
                    
                    
                <Route path="/terms"  element={<TermsandConditions /> } />
                    
                    

                <Route path="/privacy"  element={ <Privacypolicy />} />
                    
                    

                <Route path="/register"  element={<Register /> } />
                <Route path="/dashboard"  element={<Dashboard /> } />
                <Route path="/payment"  element={<Payment /> } />


                    

                <Route path="/"  element={<Home />} />
                    

            </Routes>



        
        </div>
        <Footer />
        </Router>
        <ToastContainer />
        </>

    );
}

export default App;
