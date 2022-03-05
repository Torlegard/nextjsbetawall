import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Pagination, Navigation } from 'swiper';
import { Box, Center, useColorMode, Text } from '@chakra-ui/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function SwiperPage() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400',
  };

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
          modules={[EffectFlip, Pagination, Navigation]}
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
