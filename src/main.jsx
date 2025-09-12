
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ContactProvider } from './context/ContactContext';

createRoot(document.getElementById('root')).render(
 <ContactProvider>
    <App />
  </ContactProvider>
)
