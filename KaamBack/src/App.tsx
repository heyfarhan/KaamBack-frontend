import './App.css'
import { BrowserRouter as Router, Route, Navigate, Routes, Link } from "react-router-dom";
import { lazy, Suspense } from "react"

const Home = lazy(() => import('./pages/Home'))
const OurTeam = lazy(() => import('./pages/OurTeam'))

const Loader = lazy(() => import('./components/Loader'))

function App() {

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ourteam" element={<OurTeam />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
