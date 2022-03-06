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

  const [display, changeDisplay] = useState('none');

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
        pos='sticky'
        top='1rem'
        right='1rem'
        bg={navColor[colorMode]}
        align='center'
        as='nav'
        justifyContent='space-between'
        direction='row'
        width='100%'
        height='3rem'
        maxWidth='100%'
        minWidth='356px'
      >
        <Flex display={['none', 'none', 'flex', 'flex']}>
          <NextLink href='/' passHref>
            <Button
              as='a'
              variant='ghost'
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
            >
              BetaWall
            </Button>
          </NextLink>
          <NextLink href='../pictures/' passHref>
            <Button
              as='a'
              variant='outline'
              mr={1}
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
            >
              Pictures
            </Button>
          </NextLink>
          <NextLink href='../events/' passHref>
            <Button
              as='a'
              variant='outline'
              mr={1}
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
            >
              Events
            </Button>
          </NextLink>
        </Flex>
        <IconButton
          aria-label='Open Menu'
          size='md'
          mr={3}
          icon={<HamburgerIcon />}
          display={['flex', 'flex', 'none', 'none']}
          onClick={() => changeDisplay('flex')}
        />
        <Spacer />
        <DarkModeSwitch />
        
      </StickyNav>

      <StickyNav display={['flex', 'flex', 'none', 'none']}>
        <Flex
          w='100vw'
          h='100vh'
          zIndex={20}
          bg={navColor[colorMode]}
          top='0'
          left='0'
          flexDir='column'
          position='fixed'
          display={display}
        >
          <Flex justify='flex-end'>
            <IconButton
              aria-label='Close Menu'
              size='md'
              mt={2}
              mr={2}
              icon={<CloseIcon />}
              onClick={() => changeDisplay('none')}
            />
          </Flex>
          <Flex
            flexDir='column'
            align='center'
            //
            // maxWidth='100%'
            // minWidth='356px'
          >
            <Flex>
              <NextLink href='/' passHref>
                <Button
                  as='a'
                  variant='ghost'
                  my={5}
                  w='100%'
                  _hover={{ backgroundColor: navHoverBg[colorMode] }}
                >
                  Home
                </Button>
              </NextLink>
              <NextLink href='../pictures' passHref>
                <Button
                  as='a'
                  variant='ghost'
                  my={5}
                  w='100%'
                  _hover={{ backgroundColor: navHoverBg[colorMode] }}
                >
                  Pictures
                </Button>
              </NextLink>
              <NextLink href='../events' passHref>
                <Button
                  as='a'
                  variant='ghost'
                  my={5}
                  w='100%'
                  _hover={{ backgroundColor: navHoverBg[colorMode] }}
                >
                  Events
                </Button>
              </NextLink>
            </Flex>
          </Flex>
        </Flex>
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
      </Flex>
        {children}
    </>
  );
};
export default Container;
