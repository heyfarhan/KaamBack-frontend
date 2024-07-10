import reviews from '../data/reviewData.json'
import { IoIosStar } from "react-icons/io";

// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';// Default theme
import '@splidejs/react-splide/css';


// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';


// or only core styles
import '@splidejs/react-splide/css/core';

const Testimonial = () => {

    const splideOptions: any = {
        rewind: true,
        autoplay: true,
        interval: 4000,
        width: '80%',
        gap: '10rem',
        padding: { left: '10%', right: '10%' },
        breakpoints: {
            640: {
                gap: '2rem',
                width: '100%',
                padding: { left: '10%' },
            },
            768: {
                gap: '1.5rem',
                width: '80%',
                padding: { right: '10%' },
            },
            1024: {
                gap: '2rem',
                width: '70%',
                padding: { right: '10%' },
            }
        }
    }

    return (
        <div className='py-16 flex flex-col items-center w-full'>
            <h1 className='text-3xl text-custom-500 font-bold'>A Word from Pioneers</h1>
            <Splide options={splideOptions}>
                {reviews.map((review, index) => (
                    <SplideSlide key={index}>
                        <div className="flex flex-row items-center drop-shadow-xl rounded-lg lg:px-4 py-4 overflow-visible bg-custom-100 lg:h-[420px] lg:mt-20">
                            <img src={review.image} className=" hidden lg:block mb-[80px] w-[50%]" alt={review.name} />
                            <div className="flex flex-col lg:pl-6 lg:pr-16 px-5">
                                <p className="text-2xl text-white font-semibold">{review.name}</p>
                                <div className="my-2 flex flex-row gap-x-1">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <IoIosStar key={i} size={20} color="#FFD752" />
                                    ))}
                                </div>
                                <p className="text-sm text-white font-ptSans tracking-wider">{review.text}</p>
                            </div>
                        </div>
                    </SplideSlide>
                ))}
            </Splide>

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
        </div>
    )
}

export default Testimonial
