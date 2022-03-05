// This is a wrapper for any page we want to add the website and saves a lot of time by not re-writing our basic pages.
import React from 'react';
import { useColorMode, Spacer, Button, Flex, Box, IconButton } from '@chakra-ui/react';
import NextLink from 'next/link';
import styled from '@emotion/styled';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';

import DarkModeSwitch from '../components/DarkModeSwitch';

const Container = ({ children }) => {
  const { colorMode } = useColorMode();

  const navColor = {
    light: 'gray.50',
    dark: 'gray.900',
  };

  const bgColor = {
    light: '#white',
    dark: '#171717',
  };
  const navHoverBg = {
    light: 'gray.200',
    dark: 'gray.600',
  };
  const color = {
    light: 'black',
    dark: 'white',
  };

  const StickyNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop-filter: saturate(180%) blur(20px);
    transition: height 0.5s, line-height 0.5s;
  `;
  return (
    <>
      <StickyNav
        flexDirection='row'
        justifyContent='space-between'
        alignItems='center'
        maxWidth='100%'
        minWidth='356px'
        width='100%'
        height='100%'
        bg={navColor[colorMode]}
        as='nav'
        px={[2, 6, 6]}
        py={2}
        mt={1}
        mb={[0, 0, 8]}
        mx='auto'
      >
        <Box>
          <NextLink href='/' passHref>
            <Button as='a' variant='ghost' p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg[colorMode] }}>
              BetaWall
            </Button>
          </NextLink>
        </Box>
        <Spacer />
        <Box display={['none', 'none', 'flex', 'flex']}>
          <NextLink href='../pictures/' passHref>
            <Button as='a' variant='outline' mr={1} p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg[colorMode] }}>
              Pictures
            </Button>
          </NextLink>
          <NextLink href='../events/' passHref>
            <Button as='a' variant='outline' mr={1} p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg[colorMode] }}>
              Events
            </Button>
          </NextLink>
        </Box>
        <IconButton
          aria-label='Open Menu'
          size='lg'
          mr={2}
          icon={<HamburgerIcon />}
          display={['flex', 'flex', 'none', 'none']}
        />
        <DarkModeSwitch />
      </StickyNav>

      <Flex
        as='main'
        justifyContent='center'
        flexDirection='column'
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        px={[0, 4, 4]}
        mt={[4, 8, 8]}
      >
        {children}
      </Flex>
    </>
  );
};
export default Container;
