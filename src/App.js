import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Footer from './components/Footer';
import Contact from './routes/Contact';
import Aboutus from './routes/Aboutus';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Nav />
          <Routes>
                <Route path='/'  element={<Home />}/>
                <Route path='/contact'  element={<Contact />}/>
                <Route path='/about' element={<Aboutus />}/>
          </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
