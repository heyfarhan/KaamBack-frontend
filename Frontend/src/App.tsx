import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react"

const Home = lazy(() => import('./pages/Home'))
const Career = lazy(() => import('./pages/Career'))
const Loader = lazy(() => import('./components/Loader'))
const OurTeam = lazy(() => import('./pages/OurTeam'))
const CompanyDashboard = lazy(() => import('./pages/CompanyDashboard'))
const YourHires = lazy(() => import('./components/YourHires'))
const YourProjects = lazy(() => import('./components/YourProjects'))
const Profile = lazy(() => import('./pages/Profile'))

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
          <Route path="/company-dashboard/profile" element={<Profile />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
