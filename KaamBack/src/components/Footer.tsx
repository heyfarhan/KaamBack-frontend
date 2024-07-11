import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import logo from '../assets/kaamback.png';

const footerCols = [
    {
        title: "Categories",
        items: ["Programming & Tech", "Business", "Design", "Blockchain", "Digital Marketing"]
    },
    {
        title: "Community",
        items: ["Community Hub", "Forum", "Events", "Blogs"]
    },
    {
        title: "About",
        items: [
            { label: "About KaamBack", path: "/#about" },
            { label: "Careers", path: "/career" },
            { label: "Press and notes" },
            { label: "Privacy Policy" },
            { label: "Terms of Services" }
        ]
    },
    {
        title: "Support",
        items: ["Help and Support", "Company guide", "Freelancer guide"]
    }
];

const Footer = () => {
    const navigate = useNavigate();

    const handleNavigation = (path:any) => {
        if (path === "/#about") {
            navigate("/", { replace: true });
            setTimeout(() => {
                const aboutSection = document.getElementById("about");
                if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        } else {
            navigate(path);
        }
    };

    return (
        <footer className="flex flex-col items-center p-6 lg:px-24 lg:pb-20 bg-white">
            <div className="flex flex-col lg:flex-row justify-between w-full">
                <div className="flex flex-col lg:items-start mb-6 lg:mb-0 lg:left-[-10px]">
                    <img src={logo} alt="logo" className="w-[150px] lg:w-[200px] h-auto mb-5" />
                    <div className="flex flex-col gap-y-3">
                        <div className="flex items-center">
                            <FaFacebook size={30} color="#0865fe" />
                            <a className="ml-2 text-lg text-[#041893] font-semibold underline hover:cursor-pointer">Facebook</a>
                        </div>
                        <div className="flex items-center">
                            <FaInstagram size={30} />
                            <a className="ml-2 text-lg text-[#041893] font-semibold underline hover:cursor-pointer" href="https://www.instagram.com/kaamback.india">Instagram</a>
                        </div>
                        <div className="flex items-center">
                            <FaXTwitter size={30} />
                            <a className="ml-2 text-lg text-[#041893] font-semibold underline hover:cursor-pointer">Twitter</a>
                        </div>
                        <div className="flex items-center">
                            <FaLinkedin size={30} color="#0865fe" />
                            <a className="ml-2 text-lg text-[#041893] font-semibold underline hover:cursor-pointer" href="https://www.linkedin.com/company/kaamback">LinkedIn</a>
                        </div>
                    </div>
                </div>
                {footerCols.map((section, index) => (
                    <div className="flex flex-col mb-6 lg:mb-0" key={index}>
                        <h1 className="text-xl lg:text-2xl font-semibold mb-4">{section.title}</h1>
                        {section.items.map((item, idx) => (
                            typeof item === 'string' ? (
                                <p className="text-md lg:text-lg my-1 font-medium hover:cursor-pointer" key={idx}>{item}</p>
                            ) : (
                                <p
                                    className="text-md lg:text-lg my-1 font-medium hover:cursor-pointer"
                                    onClick={() => handleNavigation(item.path)}
                                    key={idx}
                                >
                                    {item.label}
                                </p>
                            )
                        ))}
                    </div>
                ))}
            </div>
            <div className="mt-6 lg:mt-16 w-full">
                <p className="text-center text-md lg:text-lg font-semibold">&#169; KaamBack, 2024. <span className="text-[#827B5A]">All Rights Reserved.</span></p>
            </div>
        </footer>
    );
};

export default Footer;
