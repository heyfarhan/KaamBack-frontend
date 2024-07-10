import Img from "../assets/Group 40.png"
// import Ellipse1 from "../assets/Ellipse 2.png"
const About = () => {
    return (
      <div className='w-[95%] mx-auto py-16 px-2 border-top rounded-2xl'>
          <div className='max-w-[1340px] mx-auto grid md:grid-cols-10 items-center shadow-xl py-9'>
              
                 <div  className='md:col-span-6 ml-6 '>
                  <h1 className='font-[700] text-3xl md:text-4xl py-2 mb-4'>About Us</h1>
                  <p className='text-black font-normal text-[13px] md:text-[15px]  '> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                     labore et dolore magna aliqua. Egestas diam in arcu cursus euismod quis. Sed nisi lacus sed viverra tellus. Imperdiet proin fermentum leo vel orci porta
                      non pulvinar neque. Tellus orci ac auctor augue mauris augue. Vitae tortor condimentum lacinia quis vel eros donec ac odio. Aliquam malesuada bibendum 
                      arcu vitae elementum. Nunc mattis enim ut tellus elementum sagittis vitae. Orci porta non pulvinar neque laoreet. Montes nascetur ridiculus mus mauris 
                      vitae ultricies. Laoreet id donec ultrices tincidunt arcu non sodales. Gravida arcu ac tortor dignissim convallis.
                  </p><br/>
                  <p className='text-black font-normal text-[13px] md:text-[15px]'> Nibh sed pulvinar proin gravida hendrerit lectus a. Et sollicitudin ac orci phasellus egestas
                     tellus rutrum tellus pellentesque. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Orci sagittis eu volutpat odio facilisis mauris sit. 
                     Purus in mollis nunc sed. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Tempus imperdiet nulla malesuada pellentesque elit
                      eget gravida. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Pellentesque dignissim enim sit amet venenatis urna cursus
                       eget. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Id leo in vitae turpis massa sed. Sagittis eu volutpat odio facilisis mauris sit.
                  </p>
                  </div>
                  <div className='md:col-span-4 ml-6 relative'>
                    <img className='w-[500px] bg-transparent mb-6 z-10 relative' src={Img} alt='Main Image' style={{ zIndex: '10' }} />
                    {/* <img className='w-[200px]absolute top-0 left-0' src={Ellipse1} alt='Ellipse Image' style={{ zIndex: '20' }} /> */}
</div>



          </div>
  
      </div>
    )
  }
  
  export default About