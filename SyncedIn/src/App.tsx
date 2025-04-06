import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Search from './pages/Search';
import HomePage from './pages/HomePage';
import Application from "./pages/Application"

import {Navbar} from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
    <Routes>
      <Route path="/" element={<Signup/>} />
      <Route path="/search" element={<Search/>}/>
      <Route path="/homepage" element={<HomePage/>} />
      <Route path="/application/:id" element={<Application />} />
    </Routes>
      </div>
    </div>
  );
}

export default App;