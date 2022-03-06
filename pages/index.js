import Head from 'next/head';
import { useColorMode, Heading, Text, Flex, Stack } from '@chakra-ui/react';

import Container from '../components/Container';
import SwiperPage from '../components/Swiper';

export default function Index() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400',
  };
  return (
    <Container>
      <Head>
        <title>BetaWall • Home</title>
      </Head>

      <Stack
        as='main'
        spacing={8}
        justifyContent='center'
        alignItems='center'
        m='0 auto 4rem auto'
        maxWidth='700px'
        px={2}
      >
      <Flex flexDirection='column' justifyContent='flex-start' alignItems='center' maxWidth='600px'>
        <Heading mb='1'>Find 'em & Flash 'em</Heading>
        <Text color={colorSecondary[colorMode]}>
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit...
        </Text>
      </Flex>
      
      </Stack>
      <SwiperPage />
    </Container>
  );
}
