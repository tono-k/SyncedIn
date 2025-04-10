import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import { UserProvider } from './UserContext.tsx';
import { ThemeProvider } from './ThemeContext.tsx'; // ⬅️ import this
import App from './App';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeProvider> 
      <UserProvider>
        <App />
      </UserProvider>
    </ThemeProvider>
  </BrowserRouter>
)
