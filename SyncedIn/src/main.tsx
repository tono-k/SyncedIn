import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import { UserProvider } from './UserContext.tsx';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>    
    <UserProvider>
      <App/>
    </UserProvider>
  </BrowserRouter>
)
