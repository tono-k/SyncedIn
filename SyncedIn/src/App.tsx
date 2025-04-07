import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import HomePage from './pages/HomePage';
import Navbar from "./components/Navbar";
import OnlineAssessment from './pages/OnlineAssessment';

function App() {
  return (
    <div>
      <Navbar/>
      <div className="content">
        <Routes>
          <Route path="/" element={<Signup/>} />
          <Route path="/homepage" element={<HomePage/>} />
          <Route path="/onlineassessment" element={<OnlineAssessment/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;