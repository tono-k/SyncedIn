import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import HomePage from './pages/HomePage';
import Application from "./pages/Application"
import Navbar from "./components/Navbar";
import Terms from "./pages/Terms"

function App() {
  return (
    <div>
      <Navbar/>
      <div className="content">
    <Routes>
      <Route path="/" element={<Signup/>} />
      <Route path="/terms" element={<Terms/>} />
      <Route path="/homepage" element={<HomePage/>} />
      <Route path="/application/:id" element={<Application />} />
      <Route path="/" element={<Signup/>} />
      <Route path="/homepage" element={<HomePage/>} />
    </Routes>
       
      </div>
    </div>
  );
}

export default App;