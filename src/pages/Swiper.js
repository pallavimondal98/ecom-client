import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardModel from './CardModel';

//Importing images
import {allData} from '../Data';

const SwiperSlider = () => {
  return (
    <div className='container p-4 justify-content-center mt-11'>
      <h1 className='mt-4'>Featured Product</h1>
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          className='mySwiper'
          breakpoints={{
            0:{
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480:{
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768:{
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1280:{
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          {allData.map((Item, index)=>(
            <SwiperSlide key={index}>
              <CardModel data={Item} />
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  )
}

export default SwiperSlider