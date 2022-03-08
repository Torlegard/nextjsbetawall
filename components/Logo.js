import React from 'react';
import { Button, Box, Image } from '@chakra-ui/react';
import NextLink from 'next/link';

function Logo() {
  return (
    <Box ml={2} mr={1}>
      <NextLink href='/' passHref>
        <Button variant='link'>
          <Image src='../images/logo.png' boxSize='35px' objectFit='fill' />
        </Button>
      </NextLink>
    </Box>
  );
}
export default Logo;
