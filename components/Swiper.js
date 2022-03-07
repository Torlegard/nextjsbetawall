import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, EffectFlip, Pagination, Navigation } from 'swiper';
import { Box, Center } from '@chakra-ui/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function SwiperPage() {
  return (
    <Center mb='1em'>
      <Box maxW='70%'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          effect={'flip'}
          loop={true}
          grabCursor={true}
          pagination={true}
          navigation={true}
          keyboard={{
            enabled: true,
          }}
          modules={[Keyboard, EffectFlip, Pagination, Navigation]}
          className='picSwiper'
        >
          <SwiperSlide>
            <img src='../images/climb1.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='../images/climb2.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='../images/climb3.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='../images/climb4.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='../images/climb5.jpg' />
          </SwiperSlide>
        </Swiper>
      </Box>
    </Center>
  );
}
export default SwiperPage;
