import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import toast, { Toaster } from 'react-hot-toast';
import AuthContext from './context/AuthContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
      <Toaster />
      <App />
    </AuthContext>
  </StrictMode>,
)
