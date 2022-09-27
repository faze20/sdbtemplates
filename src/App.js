import React ,{ useState } from 'react';
import './Chat.css'
// import './App.css';
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
import BlogHome from './components/Bloghome';
import Utilities from './components/Utilities';
import TermsandConditions from './components/TermsandConditions';
import Privacypolicy from './components/Privacypolicy';
import Register from './components/Register';
import Forgotpassword from './components/Forgotpassword';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Donation from './components/donation';
import Pricing from './components/Pricing';
import Payment from './components/Payment';
import Error404 from './components/Error404';
import Blog from './components/Blog';
import Academy from './components/academy/Academy';
import ChatHome from './components/chat/ChatHome';

function App() {
    const[showChat, setShowChat]= useState(false)
    const chatButtonClick =()=>{
        setShowChat(true)
    }
    return (
        <>
        <div className="floater">
            {showChat ?
                <div  className="chat_box">
                    <div className="chatbox_top">
                        <button title='close chat' onClick={()=>setShowChat(false)} >X</button>
                    </div>
                    <div className="chatbox_main">
                        <h3>body of chat</h3>
                    </div>
                </div>
             : 
             <div onClick={chatButtonClick}>
                <img className='chaticonimage' title='chat with us' src="/chaticon3.png" alt="chat icon" />
             </div>
              }
        </div>
        <Router>
            <Header  />
            <Routes>
                <Route path="/websites" element={<Websites />} />
                <Route path="/chat" element={<ChatHome />} />
                <Route path="/Academy" element={ <Academy />} />
                <Route path="/software" element={ <Softwares />} />
                <Route path="/App's" element={<Applications />} />
                <Route path="/data"  element={ <Clouddata /> } />
                <Route path="/utilities"  element={ <Utilities />} />
                <Route path="/contact"  element={ <Contact /> } />
                <Route path="/account"  element={ <Account /> } />
                <Route path="/quote"  element={ <Quote />} />
                <Route path="/blockchain"  element={ <Blockchain /> } />
                <Route path="/blogs/:id"  element={ <Blog /> } />
                <Route path="/blog"  element={ <BlogHome /> } />
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
                <Route path="/donation"  element={<Donation /> } />
                <Route path="/pricing"  element={<Pricing /> } />
                <Route path="/payment"  element={<Payment /> } />
                <Route path="*" element={<Error404 />} />
                <Route path="/"  element={<Home />} />
            </Routes>
            <Footer />
        </Router>
        <ToastContainer />
        </>
    );
}

export default App;
