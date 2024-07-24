import aboutImg from '../assets/aboutImg.png'

const About = () => {
  return (
    <div className="bg-white px-6 lg:px-24 lg:py-12 py-6">
      <h1 className="text-3xl font-bold text-center lg:text-left text-[#181B38]">About Us</h1>
      <div className='flex lg:flex-row lg:mt-[50px] mt-[30px] flex-col'>
        <div className='lg:w-1/2 w-full'>
          <p className='lg:font-medium font-normal'><span className='font-bold'>KAAMBACK</span> is a platform where experience professionals, including retirees and career-breakers can find project base work, offering them a chance to earn extra income by utilizing their vast industry expertise in meaningful short term engagements. This approach not only provides of flexible way to stay professionally active but also ensure that there deep seated knowledge and skills continue to make an impactive contribution to various industries. Kaamback thus serve as a gateway for these professional to engage in rewarding work, matching their experience with the right project, and enabling a seamless blend of earning and expertise-sharing.
            <br></br><br></br>
            Our vision embraces a progressive approach to sabbaticals, viewing them as invaluable opportunities for skill enhancement and personal development we aim to assure that individuals on sabbaticals have a clear and welcoming pathway back to their careers, enriched with new insights and capabilities. In parallel, we are committed to revolutionizing hiring practices by acknowledging and valuing the distinct strengths and perspectives that those who have taken sabbaticals bring to the table. This approach is key to fostering a dynamic, innovative and inclusive workplace culture. where diverse experiences are not just recognized but celebrated.</p>
        </div>
        <div className='lg:w-1/2 flex lg:justify-end w-full lg:mt-0 mt-10 justify-center'>
          <img src={aboutImg} className='w-[80%] h-[90%]' />
        </div>
      </div>
    </div>
  )
}

export default About
