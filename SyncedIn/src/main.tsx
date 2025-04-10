import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './UserContext.tsx';
import { ThemeProvider } from './ThemeContext.tsx';
import App from './App';
import './index.css'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeProvider> 
      <UserProvider>
        <App/>
      </UserProvider>
    </ThemeProvider>
  </BrowserRouter>
)
