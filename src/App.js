import './App.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import BlogDetails from './pages/BlogDetails';
import GalleryPage from './pages/GalleryPage';
import ContactUs from './pages/ContactUs';
import BlogsPage from './pages/BlogsPage';

function App() {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/blogs/:id" element={<BlogDetails/>}/>
          <Route path="/aboutus/:content" element={<AboutUs/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}
export default App;
