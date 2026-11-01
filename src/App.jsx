import { useState } from 'react'
import './App.css'
import {MainPage} from './Pages/MainPage'
import {Product} from './Pages/Product'
import {Profile} from './Pages/Profile'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FullPageError from './Pages/FullPageError'
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return(
    <>
      <ErrorBoundary fallback={<FullPageError />}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
    </ErrorBoundary>
    </>
  
  )
}

export default App
