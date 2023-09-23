import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/header';
import Footer from './Components/footer';
import Home from './Components/home';
import FeaturedHome from './Components/featuredhome';
import About from './Components/about';
import Homepage from './Components/homepage';
import Contact from './Components/contact';
import List from './Components/list';
import Login from './Components/login';
import Signup from './Components/signup';
import Card from './Components/start';
import AddJobListing from './Components/addjoblisting';
import MenuList from './Components/menulist';
import Test from './Components/test';
import Login2 from './Components/login2';
import Signup2 from './Components/signup2';

function App() {
  
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Card />} />
        <Route path="/header" element={<Header />} />
        <Route path="/test" element={<Test />} />
        <Route path="/home" element={<Home />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/about" element={<About />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login2" element={<Login2 />} />
        <Route path="/start" element={<Card />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup2" element={<Signup2 />} />
        <Route path="/featuredhome" element={<FeaturedHome />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/list" element={<List/>}/>
        <Route path="/menulist" element={<MenuList/>}/>
        <Route path="/addjoblisting" element={<AddJobListing/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
