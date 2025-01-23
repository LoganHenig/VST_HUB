
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './carousel.css'
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import Card from './Card';
import { IconContext } from 'react-icons';

export default () => {
  return (
    <div className='carousel-container'>
        <div className='carousel-outline'>
            <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            spaceBetween={20}
            slidesPerView={5}
            coverflowEffect={
                {
                    rotate: 0,
                    stretch: 0, 
                    depth: 85,
                    modifier: 2.5
                }
            }
            pagination={ {el: '.swiper-pagination', clickable: true} }
            navigation={ {
                nextEl:'.right',
                prevEl:'.left',
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide className='swiper-slide'><Card/></SwiperSlide>
                <SwiperSlide><Card/></SwiperSlide>
                <SwiperSlide><Card/></SwiperSlide>
                <SwiperSlide><Card/></SwiperSlide>
                <SwiperSlide><Card/></SwiperSlide>
                <SwiperSlide><Card/></SwiperSlide>
                <SwiperSlide><Card/></SwiperSlide>
            </Swiper>
        </div>
        <div className='carousel-button-container'>
            <IconContext.Provider
                value={{ color: "#0077b6", size: '40px' }}
            >   
            <div className='left pag-button'>
                <IoChevronBackCircleOutline/>
            </div>

            <div className='right pag-button'>
                <IoChevronForwardCircleOutline/>
            </div>
            </IconContext.Provider>
        </div>
        
    </div>
  );
};