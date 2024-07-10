import './App.css'
import { BrowserRouter as Router, Route, Navigate, Routes, Link } from "react-router-dom";
import { lazy, Suspense } from "react"

const Home = lazy(() => import('./pages/Home'))
const Career = lazy(() => import('./pages/Career'))
const Loader = lazy(() => import('./components/Loader'))
const OurTeam = lazy(() => import('./pages/OurTeam'))
function App() {

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
