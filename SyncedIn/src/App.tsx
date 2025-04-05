import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Search from './pages/Search';
import HomePage from './pages/HomePage';
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
    </Routes>
    </div>
    </div>
  );
}

export default App;