import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
<<<<<<< HEAD
import logo from '../assets/logo.jpg'
import Kaamback from '../assets/kaamback.png';   // Original logo, if different from logoDark
=======
import Signup from './Signup';
>>>>>>> 5a70e72a70dcc1476682319e18b8bde508de0062

const Navbar = ({bgColor}) => {
  const [isOpen, setIsOpen] = useState(false);
<<<<<<< HEAD
  const [navBackground, setNavBackground] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBackground(true);
      } else {
        setNavBackground(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);
=======
  const [showModal,setShowModal]=useState(false)
>>>>>>> 5a70e72a70dcc1476682319e18b8bde508de0062

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/career", label: "Career" },
    { path: "/ourteam", label: "Our Team" },
  ];
 

  return (
<<<<<<< HEAD
    <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 lg:px-24 lg:py-6 py-4 transition-all duration-300 ${navBackground ? 'bg-white border-b-[3px] shadow-xl' : 'bg-custom-100 border-none'} z-50`}>
=======
    <nav className={`flex items-center justify-between ${bgColor} px-6 lg:px-24 lg:py-6 py-4`}>
>>>>>>> 5a70e72a70dcc1476682319e18b8bde508de0062
      <div className="flex items-center">
        <img src={navBackground ? Kaamback : logo} alt="Logo" className="w-[150px] lg:w-[200px] h-auto" />
      </div>
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={30} className={`${navBackground ? 'text-custom-100' : 'text-[#fafcfd]'}`} /> : <FaBars size={30} className={`${navBackground ? 'text-custom-100' : 'text-[#fafcfd]'}`} />}
        </button>
      </div>
      <div className={`lg:flex lg:flex-row lg:items-center lg:gap-x-[60px] ${isOpen ? 'block' : 'hidden'} absolute lg:relative top-16 lg:top-auto left-0 w-full lg:w-auto ${navBackground ? 'bg-[#FFFDF3]' : 'bg-custom-100'} lg:bg-transparent lg:static z-10`}>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-end">
          {navLinks.map(link => (
            <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)}>
              <p className={`font-medium text-xl font-ptSans py-2 lg:py-0 px-6 ${activeLink === link.path && navBackground ? 'text-custom-100 underline' : activeLink === link.path ? 'text-white underline' : 'hover:underline'} ${navBackground ? 'text-custom-100' : 'text-[#fafcfd]'}`}>
                {link.label}
              </p>
            </Link>
          ))}
<<<<<<< HEAD
          <div className={`w-[90px] border-2 rounded-lg py-1 mt-2 lg:mt-0 mb-4 lg:mb-0 lg:ml-[24px] flex justify-center ${navBackground ? 'border-custom-100' : 'border-white'}`}>
            <p className={`text-xl font-ptSans font-medium ${navBackground ? 'text-custom-100' : 'text-white'}`}>Log in</p>
          </div>
=======
           <button onClick={() => { setShowModal(true); setIsOpen(false); }}>
            <div className='w-[90px] border-2 border-white rounded-lg px-2 py-1 mt-2 lg:mt-0 mb-4 lg:mb-0 lg:ml-[24px]'>
              <p className='text-white text-xl font-ptSans'>Sign up</p>
            </div>
          </button>
>>>>>>> 5a70e72a70dcc1476682319e18b8bde508de0062
        </div>
      </div>
      {showModal && <Signup onClose={() => setShowModal(false)} />}
    </nav>
  )
}

export default Navbar;
