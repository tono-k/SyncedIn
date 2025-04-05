import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Search from './pages/Search';
import HomePage from './pages/HomePage';
import Application from "./pages/Application"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup/>} />
      <Route path="/search" element={<Search/>}/>
      <Route path="/homepage" element={<HomePage/>} />
      <Route path="/application/:id" element={<Application />} />
    </Routes>
  );
}

export default App;