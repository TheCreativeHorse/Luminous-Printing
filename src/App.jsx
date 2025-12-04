import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { BusinessCards } from './pages/BusinessCards';
import { PrintProductsBatch1 } from './pages/PrintProductsBatch1';
import { PrintProductsBatch2 } from './pages/PrintProductsBatch2';
import { PrintProductsBatch3 } from './pages/PrintProductsBatch3';

function App() {
  return (
    <Router basename="/Luminous-Printing">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/business-cards" element={<BusinessCards />} />
        <Route path="/categories/print-products" element={<PrintProductsBatch1 />} />
        <Route path="/categories/print-products/batch-2" element={<PrintProductsBatch2 />} />
        <Route path="/categories/print-products/batch-3" element={<PrintProductsBatch3 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
