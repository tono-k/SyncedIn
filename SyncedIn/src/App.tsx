import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import HomePage from './pages/HomePage';
import Application from "./pages/Application";
import Navbar from "./components/Navbar";
import OnlineAssessment from './pages/OnlineAssessment';
import Terms from "./pages/Terms";
import TeamPage from "./pages/JobTeamPage";
import { ThemeProvider } from "./ThemeContext";
import { UserProvider } from './UserContext'; // If needed globally

function App() {
  return (
    <ThemeProvider>
      <UserProvider> {/* Wrap this too if you're using context */}
        <Navbar />
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
