import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Router, Routes } from "react-router-dom"

import PageHome from './routes/Home'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageHome/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
