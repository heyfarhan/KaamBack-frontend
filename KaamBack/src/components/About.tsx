import aboutImg from '../assets/aboutImg.png'

const About = () => {
  return (
    <div className="bg-white px-6 lg:px-24 lg:py-12 py-6">
      <h1 className="text-3xl font-bold text-center lg:text-left text-[#181B38]">About Us</h1>
      <div className='flex lg:flex-row lg:mt-[50px] mt-[30px] flex-col'>
        <div className='lg:w-1/2 w-full'>
          <p className='lg:font-medium font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas diam in arcu cursus euismod quis. Sed nisi lacus sed viverra tellus. Imperdiet proin fermentum leo vel orci porta non pulvinar neque. Tellus orci ac auctor augue mauris augue. Vitae tortor condimentum lacinia quis vel eros donec ac odio. Aliquam malesuada bibendum arcu vitae elementum. Nunc mattis enim ut tellus elementum sagittis vitae. Orci porta non pulvinar neque laoreet. Montes nascetur ridiculus mus mauris vitae ultricies. Laoreet id donec ultrices tincidunt arcu non sodales. Gravida arcu ac tortor dignissim convallis.
            <br></br><br></br>
            Nibh sed pulvinar proin gravida hendrerit lectus a. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Orci sagittis eu volutpat odio facilisis mauris sit. Purus in mollis nunc sed. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Tempus imperdiet nulla malesuada pellentesque elit eget gravida. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Pellentesque dignissim enim sit amet venenatis urna cursus eget. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Id leo in vitae turpis massa sed. Sagittis eu volutpat odio facilisis mauris sit.</p>
        </div>
        <div className='lg:w-1/2 flex lg:justify-end w-full lg:mt-0 mt-10 justify-center'>
          <img src={aboutImg} className='w-[80%] h-[90%]' />
        </div>
      </div>
    </div>
  )
}

export default About
