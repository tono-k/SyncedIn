import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Search from './pages/Search';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup/>} />
      <Route path="/search" element={<Search/>} />
    </Routes>
  );
}

export default App;