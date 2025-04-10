import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import HomePage from './pages/HomePage';
import Application from "./pages/Application"
import Navbar from "./components/Navbar";
import OnlineAssessment from './pages/OnlineAssessment';
import Terms from "./pages/Terms"
import JobTeamPage from './pages/JobTeamPage';
import ResumeFeedback from "./pages/ResumeFeedback";

function App() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/application" element={<Application />} />
          <Route path="/onlineassessment" element={<OnlineAssessment />} />
          <Route path="/team/:jobId" element={<JobTeamPage />} />
          <Route path="/resume-feedback" element={<ResumeFeedback />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;