import * as React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { Autoplay, EffectCards } from "swiper";

function CarouselSection() {
    React.useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>
            <div id='carousel' className='carousel mb-32'>
                <div className='header w-full flex justify-center items-center' data-aos="zoom-out">
                    <img className='max-w-[300px] mb-10' src='/images/logo2.png' />
                </div>
                <Swiper
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    effect={"cards"}
                    grabCursor={true}
                    modules={[Autoplay, EffectCards]}
                    className="nft-swiper"
                >
                    <SwiperSlide><div className='p-4 w-full h-full'><img className='rounded-2xl shadow-img w-full h-full' src='/images/slides/slider1.jpg' /></div></SwiperSlide>
                    <SwiperSlide><div className='p-4 w-full h-full'><img className='rounded-2xl shadow-img w-full h-full' src='/images/slides/slider2.jpg' /></div></SwiperSlide>
                    <SwiperSlide><div className='p-4 w-full h-full'><img className='rounded-2xl shadow-img w-full h-full' src='/images/slides/slider3.jpg' /></div></SwiperSlide>
                    <SwiperSlide><div className='p-4 w-full h-full'><img className='rounded-2xl shadow-img w-full h-full' src='/images/slides/slider4.jpg' /></div></SwiperSlide>
                    <SwiperSlide><div className='p-4 w-full h-full'><img className='rounded-2xl shadow-img w-full h-full' src='/images/slides/slider5.jpg' /></div></SwiperSlide>
                    <SwiperSlide><div className='p-4 w-full h-full'><img className='rounded-2xl shadow-img w-full h-full' src='/images/slides/slider6.jpg' /></div></SwiperSlide>
                    <SwiperSlide><div className='p-4 w-full h-full'><img className='rounded-2xl shadow-img w-full h-full' src='/images/slides/slider7.jpg' /></div></SwiperSlide>
                    <SwiperSlide><div className='p-4 w-full h-full'><img className='rounded-2xl shadow-img w-full h-full' src='/images/slides/slider8.jpg' /></div></SwiperSlide>
                    <SwiperSlide><div className='p-4 w-full h-full'><img className='rounded-2xl shadow-img w-full h-full' src='/images/slides/slider9.jpg' /></div></SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}
export default CarouselSection;