import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react"
import Openings from './pages/Openings';
import ApplicationForm from './pages/OpeningApplication';
import ApplicationSubmission from './pages/ApplicationSubmitted';
import HeroSection from './pages/Hire';
import JobPage from './pages/LookJobs';
import CreateJob from './pages/CreateJob';
import EditProfile from './pages/CompanyProfile';
import CompanySearch from './pages/CompanySearch';
import CompanySettings from './pages/CompanySettings';
import Logout from './pages/Logout';
import Messages from './pages/Messages';

const Home = lazy(() => import('./pages/Home'))
const Career = lazy(() => import('./pages/Career'))
const Loader = lazy(() => import('./components/Loader'))
const OurTeam = lazy(() => import('./pages/OurTeam'))
const CompanyDashboard = lazy(() => import('./pages/CompanyDashboard'))
const YourHires = lazy(() => import('./components/YourHires'))
const YourProjects = lazy(() => import('./components/YourProjects'))
// const Profile = lazy(() => import('./pages/Profile'))

function App() {

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/career" element={<Career />} />
          <Route path="/company-dashboard" element={<CompanyDashboard />} />
          <Route path="/company-dashboard/your-hires" element={<YourHires />} />
          <Route path="/company-dashboard/your-projects" element={<YourProjects />} />
          <Route path="/openings" element={<Openings/>} />
          <Route path="/application" element={<ApplicationForm/>}/>
          <Route path="/submitted" element={<ApplicationSubmission/>}/>
          <Route path="/hire" element={<HeroSection/>}/>
          <Route path="/lookjobs" element={<JobPage/>}/>
          <Route path="/company-dashboard/create-job" element={<CreateJob />} />
          <Route path="/company-profile" element={<EditProfile />} />
          <Route path="/search" element={<CompanySearch/>} />
          <Route path="/settings" element={<CompanySettings/>} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="/messages" element={<Messages/>} />
          




          


        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
