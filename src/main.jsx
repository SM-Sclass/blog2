import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProviderWrapper } from './context/blogdata-context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProviderWrapper>
      <App />
    </ProviderWrapper>
  </StrictMode>,
)
