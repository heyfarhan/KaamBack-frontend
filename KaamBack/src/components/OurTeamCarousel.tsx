import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const OurTeamCarousel = ({ children, autoSlide = false, autoSlideInterval = 4000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;
    const totalItems = React.Children.count(children);
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    useEffect(() => {
        if (autoSlide) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
            }, autoSlideInterval);
            return () => clearInterval(interval);
        }
    }, [autoSlide, totalPages, autoSlideInterval]);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
    };

    const renderSlides = () => {
        return (
            <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {React.Children.toArray(children).map((child, index) => (
                    <div key={index} className="flex-none w-full flex justify-around">
                        {React.Children.toArray(children).slice(index * itemsPerPage, (index + 1) * itemsPerPage)}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="relative w-full">
            <button onClick={prevSlide} className="absolute top-1/2 transform -translate-y-1/2 left-[-60px] bg-blue-100 p-2 rounded-full">
                <FiChevronLeft size={40} />
            </button>
            <div className="overflow-hidden">
                {renderSlides()}
            </div>
            <button onClick={nextSlide} className="absolute top-1/2 transform -translate-y-1/2 right-[-60px] bg-blue-100 p-2 rounded-full">
                <FiChevronRight size={40} />
            </button>
        </div>
    );
};

export default OurTeamCarousel;
