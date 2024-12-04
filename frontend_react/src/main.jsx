import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App, { AjoutProduit } from './App.jsx'
import { App2, AjoutCategorie} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <App2 />
    <AjoutProduit />
    <AjoutCategorie />

  </StrictMode>,
)
