import './App.css'
import { BrowserRouter as Router, Route, Navigate, Routes, Link } from "react-router-dom";
import { lazy, Suspense } from "react"

const Home = lazy(() => import('./pages/Home'))
const Career = lazy(() => import('./pages/Career'))
const Navbar = lazy(() => import('./components/Navbar'))
const Loader = lazy(() => import('./components/Loader'))
const Footer = lazy(() => import('./components/Footer'))
const bgColor = 'bg-custom-100';
function App() {

  return (
    <Router>
      <Navbar bgColor={bgColor} />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  )
}

export default App
