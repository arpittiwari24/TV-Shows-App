import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ShowScreen from './screens/ShowScreen';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route path="/show/:id" element={<ShowScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
