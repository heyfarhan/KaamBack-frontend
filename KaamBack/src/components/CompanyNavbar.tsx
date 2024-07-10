import { useState, useEffect } from 'react';
import logo from '../assets/logo.jpg';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import dashboard from '../assets/dashboard.png'
import project from '../assets/project.png'
import bell from '../assets/bell.png'
import question from '../assets/question.png'
import message from '../assets/message.png'
import avatar from '../assets/avatar.png'
import search from '../assets/search.png';

const CompanyNavbar = () => {

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
        { image: dashboard, path: '/dashboard' },
        { image: project, path: '/project' },
        { image: bell, path: '/bell' },
        { image: question, path: '/question' },
        { image: message, path: '/message' },
        { image: avatar, path: '/avatar' },
    ];

    return (
        <nav className='fixed top-0 left-0 w-full flex items-center justify-between px-6 lg:px-24 lg:py-6 py-4 transition-all duration-300 bg-[#FFFDF3] border-b-[3px] shadow-xl z-50'>
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="w-[150px] lg:w-[200px] h-auto" />
            </div>
            <div className="lg:hidden">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes size={30} className="text-custom-100" /> : <FaBars size={30} className="text-custom-100" />}
                </button>
            </div>
            <div className='border-2 border-[#BFE0FF] w-2/5 h-[40px] rounded-full flex flex-row justify-between items-center'>
                <p className='text-custom-300 ml-6 font-semibold italic text-lg'>Search for freelancer...</p>
                <div className="bg-[#BFE0FF] w-[100px] rounded-full flex justify-center items-center h-full">
                    <img src={search} className="h-[20px] w-[20px]" />
                </div>
            </div>
            <div className={`lg:flex lg:flex-row lg:items-center lg:gap-x-[60px] ${isOpen ? 'block' : 'hidden'} absolute lg:relative top-20 lg:top-auto left-0 w-full lg:w-auto ${navBackground ? 'bg-[#FFFDF3]' : 'bg-custom-100'} lg:bg-transparent lg:static z-10`}>
                <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-end gap-x-4">
                    {navLinks.map(link => (
                        <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)}>
                            <img src={link.image} className={`${link.image === avatar ? 'rounded-full w-[30px] h-[30px]' : 'w-[25px] h-[25px]'}`} color='white' />
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default CompanyNavbar
