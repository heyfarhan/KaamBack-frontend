import search from '../assets/search.png';
import design from '../assets/img1.png';
import digital from '../assets/img2.png';
import business from '../assets/img3.png';
import tech from '../assets/img4.png';
import blockchain from '../assets/img5.png';
import img1 from '../assets/img7.png'
import img2 from '../assets/img6.png'
import img3 from '../assets/img8.png'
import homeImg from '../assets/homeImg.png'
import aboutImg from '../assets/aboutImg.png'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Testimonial from '../components/Testimonial';

const categories = [
  { src: design, label: 'Design' },
  { src: digital, label: 'Digital Marketing' },
  { src: business, label: 'Business' },
  { src: tech, label: 'Programming & Tech' },
  { src: blockchain, label: 'Blockchain' }
];

const Home = () => {

  const navigation = useNavigate()

  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center'>
        <div className="flex flex-col lg:flex-row lg:py-8 bg-homeBg w-full">
          <div className="w-full lg:w-1/2">
            <section className="py-40 lg:py-64 flex flex-col items-center">
              <h1 className="text-2xl lg:text-4xl font-semibold text-white text-center">
                Empowering your next project :
              </h1>
              <h1 className="text-2xl lg:text-4xl font-semibold text-[#FDD513] italic mt-4 text-center">
                Connect &nbsp; Collaborate &nbsp; Succeed
              </h1>
              <div className="bg-white w-11/12 lg:w-[530px] h-[50px] rounded-full mt-6 flex justify-between">
                <p className="self-center lg:text-md text-s font-semibold italic ml-8 text-[#1F82E8]">
                  So.. What you want to be done today..
                </p>
                <div className="bg-blue-300 w-[100px] rounded-full flex justify-center items-center">
                  <img src={search} className="h-[32px] w-[32px]" />
                </div>
              </div>
            </section>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <img src={homeImg} alt='homeImg' className="w-full lg:w-auto" />
          </div>
        </div>

        <div className="bg-white px-6 lg:px-24 py-14">
          <h1 className="text-3xl font-bold text-center lg:text-left text-[#181B38]">What You Seek, We Deliver</h1>
          <div className="flex flex-wrap justify-center gap-x-[30px] lg:gap-x-[120px] gap-y-[40px] lg:gap-y-[80px] mt-[40px] lg:mt-[50px]">
            {categories.map((category, idx) => (
              <div key={idx} className="relative bg-blue-100 w-[250px] lg:w-[300px] h-[230px] rounded-2xl flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-105 hover:z-10 cursor-pointer">
                <div className="flex flex-col items-center">
                  <img src={category.src} className="w-[70px] h-[70px] mt-[30px]" />
                  <p className="text-xl font-ptSans font-semibold mt-[40px]">{category.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white px-6 lg:px-24 py-14">
          <h1 className="text-3xl font-bold text-center lg:text-left text-[#181B38]">About Us</h1>
          <div className='flex lg:flex-row mt-[50px] flex-col'>
            <div className='lg:w-1/2 w-full'>
              <p className='font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas diam in arcu cursus euismod quis. Sed nisi lacus sed viverra tellus. Imperdiet proin fermentum leo vel orci porta non pulvinar neque. Tellus orci ac auctor augue mauris augue. Vitae tortor condimentum lacinia quis vel eros donec ac odio. Aliquam malesuada bibendum arcu vitae elementum. Nunc mattis enim ut tellus elementum sagittis vitae. Orci porta non pulvinar neque laoreet. Montes nascetur ridiculus mus mauris vitae ultricies. Laoreet id donec ultrices tincidunt arcu non sodales. Gravida arcu ac tortor dignissim convallis.
                <br></br><br></br>
                Nibh sed pulvinar proin gravida hendrerit lectus a. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Orci sagittis eu volutpat odio facilisis mauris sit. Purus in mollis nunc sed. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Tempus imperdiet nulla malesuada pellentesque elit eget gravida. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Pellentesque dignissim enim sit amet venenatis urna cursus eget. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Id leo in vitae turpis massa sed. Sagittis eu volutpat odio facilisis mauris sit.</p>
            </div>
            <div className='lg:w-1/2 flex justify-end w-full mt-10'>
              <img src={aboutImg} className='w-[450px] h-[400px]' />
            </div>
          </div>
        </div>

        <div className='bg-[#041893] mx-6 lg:mx-24 rounded-xl flex flex-col mt-10 gap-y-16'>
          <div className='flex flex-col lg:flex-row px-6 lg:px-24 items-center mt-10'>
            <div className='w-full lg:w-1/2 mb-6 lg:mb-0'>
              <p className='text-3xl text-white font-semibold font-ptSans tracking-wide'>Adapt. Grow. Scale. <br />Your Workforce Solution.</p>
              <p className='mt-2 text-md text-white font-ptSans font-thin tracking-wider'>Fuel your growth journey effortlessly! Scale your workforce dynamically to meet project demands and seize new business opportunities.</p>
            </div>
            <div className='w-full lg:w-1/2 flex justify-center lg:justify-end'>
              <img src={img1} className='h-[250px] lg:h-[350px] w-[300px] lg:w-[400px]' />
            </div>
          </div>
          <div className='flex flex-col lg:flex-row px-6 lg:px-24 items-center'>
            <div className='w-full lg:w-1/2 flex justify-center lg:justify-start order-2 lg:order-1 mt-6 lg:mt-0'>
              <img src={img2} className='h-[250px] lg:h-[350px] w-[300px] lg:w-[400px]' />
            </div>
            <div className='w-full lg:w-1/2 order-1 lg:order-2'>
              <p className='text-3xl text-white font-semibold font-ptSans tracking-wide'>Budget Mastery:<br />Efficient. Smart. Contract-Based Excellence.</p>
              <p className='mt-2 text-md text-white font-ptSans font-thin tracking-wider'>Master the art of financial efficiency! Optimize costs by engaging skilled professionals on a contract basis, sparing your budget from the weight of full-time overheads.</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row px-6 lg:px-24 items-center mb-10'>
            <div className='w-full lg:w-1/2 mb-6 lg:mb-0'>
              <p className='text-3xl text-white font-semibold font-ptSans tracking-wide'>Swift Onboarding. Precise Execution.<br />Project Ignition.</p>
              <p className='mt-2 text-md text-white font-ptSans font-thin tracking-wider'>Ignite projects with speed and precision! Quickly onboard professionals to ensure timely kick-offs and efficient execution, propelling your ventures to success.</p>
              <button className='px-10 py-2 bg-white text-[#4351E8] mt-4 rounded-md font-semibold' onClick={() => navigation('/ourteam')}>Discover Now</button>
            </div>
            <div className='w-full lg:w-1/2 flex justify-center lg:justify-end'>
              <img src={img3} className='h-[250px] lg:h-[350px] w-[300px] lg:w-[400px]' />
            </div>
          </div>
        </div>

        <Testimonial />

      </div>
      <Footer />
    </>
  );
};

export default Home;