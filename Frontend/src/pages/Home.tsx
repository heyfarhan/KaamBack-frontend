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
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Testimonial from '../components/Testimonial';
import About from '../components/About';

const categories = [
  { src: design, label: 'Design' },
  { src: digital, label: 'Digital Marketing' },
  { src: business, label: 'Business' },
  { src: tech, label: 'Programming & Tech' },
  { src: blockchain, label: 'Blockchain' }
];

const Home = () => {

  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center bg-white'>
        <div className="flex flex-col lg:flex-row lg:py-8 bg-homeBg w-full">
          <div className="w-full lg:w-1/2">
            <section className="pt-36 pb-16 lg:py-64 flex flex-col items-center">
              <h1 className="text-2xl lg:text-4xl font-semibold text-white text-center">
                Empowering your next project :
              </h1>
              <h1 className="text-2xl lg:text-4xl font-semibold text-[#FDD513] italic mt-4 text-center">
                Connect &nbsp; Collaborate &nbsp; Succeed
              </h1>
              <div className="bg-white w-11/12 lg:w-[530px] lg:h-[50px] h-[40px] rounded-full mt-6 flex justify-between">
                <p className="self-center lg:text-md text-[12px] font-semibold italic lg:ml-8 ml-4 text-[#1F82E8]">
                  So.. What you want to be done today..
                </p>
                <div className="bg-blue-300 lg:w-[100px] w-[80px] rounded-full flex justify-center items-center">
                  <img src={search} className="lg:h-[32px] lg:w-[32px] w-[28px] h-[28px]" />
                </div>
              </div>
            </section>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <img src={homeImg} alt='homeImg' className="lg:w-auto w-[80%] py-10" />
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

        <section id="about">
          <About />
        </section>

        <div className='bg-[#041893] mx-6 lg:mx-24 rounded-xl flex flex-col gap-y-16'>
          <div className='flex flex-col lg:flex-row px-6 lg:px-24 items-center mt-10'>
            <div className='w-full lg:w-1/2 mb-6 lg:mb-0'>
              <p className='text-3xl text-white font-semibold font-ptSans tracking-wide'>Adapt. Grow. Scale. <br />Your Workforce Solution.</p>
              <p className='mt-2 text-md text-white font-ptSans font-thin tracking-wider'>Fuel your growth journey effortlessly! Scale your workforce dynamically to meet project demands and seize new business opportunities.</p>
            </div>
            <div className='w-full lg:w-1/2 flex justify-center lg:justify-end'>
              <img src={img1} className='h-[200px] lg:h-[350px] w-[90%] lg:w-[400px]' />
            </div>
          </div>
          <div className='flex flex-col lg:flex-row px-6 lg:px-24 items-center'>
            <div className='w-full lg:w-1/2 flex justify-center lg:justify-start order-2 lg:order-1 mt-6 lg:mt-0'>
              <img src={img2} className='h-[200px] lg:h-[350px] w-[90%] lg:w-[400px]' />
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
              <button className='px-10 py-2 bg-white text-[#4351E8] mt-4 rounded-md font-semibold'>Discover Now</button>
            </div>
            <div className='w-full lg:w-1/2 flex justify-center lg:justify-end'>
              <img src={img3} className='h-[200px] lg:h-[350px] w-[90%] lg:w-[400px]' />
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