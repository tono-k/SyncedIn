import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import HomePage from './pages/HomePage';
import Application from "./pages/Application";
import Navbar from "./components/Navbar";
import OnlineAssessment from './pages/OnlineAssessment';
import Terms from "./pages/Terms";
import TeamPage from "./pages/JobTeamPage";
import { ThemeProvider } from "./ThemeContext";
import { UserProvider } from './UserContext';

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/application" element={<Application />} />
            <Route path="/onlineassessment" element={<OnlineAssessment />} />
            <Route path="/team/:jobId" element={<TeamPage />} /> {/* FIXED ROUTE */}
          </Routes>
        </div>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
