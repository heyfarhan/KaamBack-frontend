import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo1 from '../assets/logoLight.png';
import Kaamback1 from '../assets/KaamBack (1).png';
import Kaamback2 from '../assets/KaamBack (2).png';
import logo2 from '../assets/logoBlue.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/career", label: "Career" },
    { path: "/ourteam", label: "Our Team" },
    { path: "/company-dashboard", label: "Company" },
  ];

  const showLogo1AndKaamback1 = location.pathname === "/";
  const showLogo2AndKaamback2 = location.pathname === "/career" || location.pathname === "/ourteam";
  const isHomePage = location.pathname === "/";

  return (
    <nav className='absolute top-0 left-0 w-full flex items-center lg:justify-between px-6 lg:px-16 lg:py-6 py-2 transition-all duration-300 z-50 bg-transparent'>
      <div className="flex items-center lg:justify-between w-full lg:w-auto">
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden mr-4">
          {isOpen ? <FaTimes size={28} className={`${isHomePage ? 'text-white' : 'text-[#041893]'}`} /> : <FaBars size={28} className={`${isHomePage ? 'text-white' : 'text-[#041893]'}`} />}
        </button>
        <div className='flex flex-col items-center'>
          <div className='flex flex-row items-center'>
            {showLogo1AndKaamback1 && <img src={logo1} alt="Logo" className="w-[30px] lg:w-[50px] h-auto" />}
            {showLogo2AndKaamback2 && <img src={logo2} alt="Logo" className="w-[30px] lg:w-[50px] h-auto" />}
            {showLogo1AndKaamback1 && <img src={Kaamback1} alt="KaamBack" className="ml-2 h-[40px]" />}
            {showLogo2AndKaamback2 && <img src={Kaamback2} alt="KaamBack" className="ml-2 h-[40px]" />}
          </div>
          <div className='h-[3px] w-full bg-[#F8D328] mt-2 mb-1'></div>
          <p className={`text-sm tracking-widest font-ptSans ${isHomePage ? 'text-white' : 'text-[#041893]'}`}>
            "Where Experience meets Opportunity"
          </p>
        </div>
      </div>
      <div className={`lg:flex lg:flex-row lg:items-center lg:gap-x-[60px] ${isOpen ? 'max-h-screen' : 'max-h-0'} overflow-hidden lg:max-h-none transition-max-height duration-300 ease-in-out absolute lg:relative top-14 lg:top-auto left-0 w-full lg:w-auto ${navBackground ? 'bg-white' : 'bg-[#041893]'} lg:bg-transparent lg:static z-10`}>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-end">
          {navLinks.map(link => (
            <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)}>
              <p className={`font-medium text-[22px] font-ptSans py-2 lg:py-0 px-6 ${activeLink === link.path && isHomePage ? 'text-[#041893] underline' : activeLink === link.path ? 'text-[#041893] underline' : 'text-[#041893] hover:underline'} ${isHomePage ? 'text-[#fafcfd]' : 'text-[#041893]'}`}>
                {link.label}
              </p>
            </Link>
          ))}
          <button className={`w-[90px] rounded-full py-1 mt-2 lg:mt-0 mb-4 lg:mb-0 lg:ml-[20px] flex justify-center ${isHomePage ? 'bg-white' : 'bg-[#041893]'}`}>
            <p className={`text-[22px] font-ptSans font-semibold ${isHomePage ? 'text-[#041893]' : 'text-white'}`}>Log in</p>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
