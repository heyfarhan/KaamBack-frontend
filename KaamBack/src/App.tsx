import './App.css'
import { BrowserRouter as Router, Route, Navigate, Routes, Link } from "react-router-dom";
import { lazy, Suspense } from "react"

const Home = lazy(() => import('./pages/Home'))
<<<<<<< HEAD
const OurTeam = lazy(() => import('./pages/OurTeam'))

const Loader = lazy(() => import('./components/Loader'))

=======
const Career = lazy(() => import('./pages/Career'))
const Navbar = lazy(() => import('./components/Navbar'))
const Loader = lazy(() => import('./components/Loader'))
const Footer = lazy(() => import('./components/Footer'))
const bgColor = 'bg-custom-100';
>>>>>>> 5a70e72a70dcc1476682319e18b8bde508de0062
function App() {

  return (
    <Router>
<<<<<<< HEAD
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ourteam" element={<OurTeam />} />
=======
      <Navbar bgColor={bgColor} />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Career />} />
>>>>>>> 5a70e72a70dcc1476682319e18b8bde508de0062
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
