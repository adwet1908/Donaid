import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Campaigns from './pages/Campaigns';
import CampaignPage from './pages/CampaignPage';
import DonatePage from './pages/DonatePage';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/campaigns/:id" element={<CampaignPage />} />
        <Route path="/donate/:id" element={<DonatePage />} />
      </Routes>
    </div>
  );
};

export default App;