import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Search from './pages/Search';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup/>} />
      <Route path="/search" element={<Search/>}/>
      <Route path="/homepage" element={<HomePage/>} />
    </Routes>
  );
}

export default App;