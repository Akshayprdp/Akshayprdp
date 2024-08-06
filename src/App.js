import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import './App.css';
import Aboutpage from './Pages/Aboutpage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/About' element={<Aboutpage/>}/>
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
