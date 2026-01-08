import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { BusinessCards } from './pages/BusinessCards';
import { PrintProductsBatch1 } from './pages/PrintProductsBatch1';
import { PrintProductsBatch2 } from './pages/PrintProductsBatch2';
import { PrintProductsBatch3 } from './pages/PrintProductsBatch3';
import { BannerSignsFlagsBatch1 } from './pages/BannerSignsFlagsBatch1';
import { BannerSignsFlagsBatch2 } from './pages/BannerSignsFlagsBatch2';
import { TentsBackdropsTradeshowBatch1 } from './pages/TentsBackdropsTradeshowBatch1';
import { RetailMarketingBatch1 } from './pages/RetailMarketingBatch1';
import { WindowVehicleGraphics } from './pages/WindowVehicleGraphics';
import { LabelsStickers } from './pages/LabelsStickers';
import { Apparel } from './pages/Apparel';
import { PromotionalItems } from './pages/PromotionalItems';
import { Contact } from './pages/Contact';






import { ScrollToAnchor } from './components/ScrollToAnchor';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  return (
    <Router>
      <ScrollToAnchor />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/business-cards" element={<BusinessCards />} />
        <Route path="/categories/print-products" element={<PrintProductsBatch1 />} />
        <Route path="/categories/print-products/batch-2" element={<PrintProductsBatch2 />} />
        <Route path="/categories/print-products/batch-3" element={<PrintProductsBatch3 />} />
        <Route path="/categories/banners-signs-flags" element={<BannerSignsFlagsBatch1 />} />
        <Route path="/categories/banners-signs-flags/batch-2" element={<BannerSignsFlagsBatch2 />} />
        <Route path="/categories/tents-backdrops-tradeshow" element={<TentsBackdropsTradeshowBatch1 />} />
        <Route path="/categories/retail-marketing" element={<RetailMarketingBatch1 />} />
        <Route path="/categories/window-graphics-vehicle-wraps" element={<WindowVehicleGraphics />} />
        <Route path="/categories/labels-stickers" element={<LabelsStickers />} />
        <Route path="/categories/apparel" element={<Apparel />} />

        <Route path="/categories/promotional-items" element={<PromotionalItems />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>




      <Footer />
      <WhatsAppButton />
    </Router>
  );
}

export default App;
