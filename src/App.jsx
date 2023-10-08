import React from 'react';
// import { Icon } from '@iconify/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LazyComponent from './components/LazyComponent';
// import Link from "./components/Link";
import Navigate from './components/Navigate';
import Index from './wy/Index';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Index" />} />
        <Route path="/Index" element={<Index />} />
        <Route path="Mv" element={<LazyComponent path="Mv" />} />
        <Route path="Fount" element={<LazyComponent path="Fount" />} />
        <Route path="Login" element={<LazyComponent path="Login" />} />
      </Routes>
    </BrowserRouter>
  );
}
