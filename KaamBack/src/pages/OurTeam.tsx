import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import profile from '../assets/profile.jpg';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide'; // Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';

type ProfileCardProps = {
    name: string;
    role: string;
    image: string;
};

const ProfileCard: React.FC<ProfileCardProps> = ({ name, role, image }) => (
    <div className='group flex flex-col items-center shadow-xl lg:pb-6 pb-2 rounded-xl bg-white hover:bg-[#041893] hover:cursor-pointer transition-all duration-200 hover:text-white'>
        <img src={image} alt='' className='lg:w-[250px] lg:h-[250px] w-[200px] h-[200px] rounded-tl-xl rounded-tr-xl rounded-b-none object-cover' />
        <h2 className='text-xl font-bold text-[#181B38] lg:mt-6 mt-2 max-w-[180px] text-center group-hover:text-white'>{name}</h2>
        <h2 className='font-bold text-[12px] text-[#181B38] group-hover:text-white'>{role}</h2>
        <div className='flex flex-row items-center gap-x-4 mt-4'>
            <FaLinkedinIn size={20} className='hover:cursor-pointer' />
            <FaInstagram size={20} className='hover:cursor-pointer' />
            <FaXTwitter size={20} className='hover:cursor-pointer' />
        </div>
    </div>
);

const OurTeam = () => {
    const splideOptions: any = {
        rewind: true,
        autoplay: true,
        interval: 3000,
        width: '100%',
        gap: '1rem',
        padding: { left: '5%', right: '5%' },
        perPage: 1,
        breakpoints: {
            640: {
                perPage: 1,
                gap: '1rem',
                padding: { left: '5%', right: '5%' },
            },
            768: {
                perPage: 1,
                gap: '1.5rem',
                padding: { left: '10%', right: '10%' },
            },
            1024: {
                perPage: 1,
                gap: '2rem',
                padding: { left: '10%', right: '10%' },
            },
            1280: {
                perPage: 1,
                gap: '2rem',
                padding: { left: '5%', right: '10%' },
            },
        }
    };

    const teamMembers = [
        { name: 'Aryaman Sing', role: 'UI/UX Designer', image: profile },
        { name: 'Aryaman Sinh', role: 'UI/UX Designer', image: profile },
        { name: 'Aryaman Sigh', role: 'UI/UX Designer', image: profile },
        { name: 'Aryaman Sngh', role: 'UI/UX Designer', image: profile },
        { name: 'Aryaman ingh', role: 'UI/UX Designer', image: profile },
        { name: 'Aryaman Singh', role: 'UI/UX Designer', image: profile },
    ];

    const groupedTeamMembers = [];
    for (let i = 0; i < teamMembers.length; i += 3) {
        groupedTeamMembers.push(teamMembers.slice(i, i + 3));
    }

    return (
        <>
            <Navbar />
            <div className="bg-blue-100 px-4 lg:px-24 lg:py-12 py-8 lg:mt-[100px] mt-[60px]">
                <div className="flex flex-row h-24 items-center">
                    <div className="w-[6px] bg-[#181B38] h-20 mr-4 hidden lg:block"></div>
                    <h1 className="text-4xl md:text-5xl font-bold text-[#181B38]">OUR TEAM
                        <span className="block text-sm md:text-lg tracking-wider mt-2 ml-1">Meet our team members</span>
                    </h1>
                </div>
                <div className='flex items-center'>
                    <Splide options={splideOptions}>
                        {groupedTeamMembers.map((group, index) => (
                            <SplideSlide key={index}>
                                <div className='flex justify-center gap-x-20 flex-wrap mb-10 gap-y-10'>
                                    {group.map((member, idx) => (
                                        <ProfileCard
                                            key={idx}
                                            name={member.name}
                                            role={member.role}
                                            image={member.image}
                                        />
                                    ))}
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </div>
            <Footer />

            <style>{`
        .splide__arrow{
          opacity:1; color: red;
        }
        .splide__pagination__page.is-active{
          background-color: #041893; border-radius: 50%; width: 5px; height: 5px;
        }
        .splide__pagination__page{
          background-color: ##BFE0FF; border-radius: 50%; width: 6px; height: 6px;
        }
      `}</style>
        </>
    );
};

export default OurTeam;
