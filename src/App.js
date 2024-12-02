import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import PetCreator from './components/PetCreator';
import AppDownloadBanner from './components/ui/AppDownloadBanner';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<PetCreator />} />
          <Route path="/downloads/app" element={<AppDownloadBanner />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;