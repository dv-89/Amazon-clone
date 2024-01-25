
import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="app">
        
        <Header />
        
        <Routes>
          <Route path="/" element={<>  <Home /> </>} />
        </Routes>

        <Routes>
          <Route path="/checkout" element={<> <Checkout /> </>} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
