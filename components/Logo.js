import React from 'react';
import { Box, Image } from '@chakra-ui/react';

function Logo() {
  return (
    <Box ml={2} mr={1}>
      <Image src='../images/logo.png' boxSize='35px' objectFit='fill' />
    </Box>
  );
}
export default Logo;
