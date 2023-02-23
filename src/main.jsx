import React from 'react'
import ReactDOM from 'react-dom/client'
import Input from './screen/input';
import Print from './screen/Print';
import Home from './Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/input" element={<Input />} />
          <Route path="/print" element={<Print />} />
          <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
