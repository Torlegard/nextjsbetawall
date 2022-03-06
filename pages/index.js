import Head from 'next/head';
import { useColorMode, Heading, Text, Flex, Stack, Box } from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react';
import EventList from '../components/events/event-list';
import Container from '../components/Container';
import SwiperPage from '../components/Swiper';
import { getFeaturedEvents } from '../dummy-data';
import FeatureGrid from '../components/FeatureGrid';

export default function Index() {
  const featuredEvents = getFeaturedEvents();
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
        <Flex
          flexDirection='column'
          justifyContent='flex-start'
          alignItems='center'
          maxWidth='600px'
        >
          
          <Heading color={colorSecondary[colorMode]}>
            Your Climbing Hub
          </Heading>
          <Text mb='3em' color={colorSecondary[colorMode]}>
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
            velit...
          </Text>
        </Flex>
        <FeatureGrid />
      </Stack>
      <SwiperPage />
      <SimpleGrid columns={[1, 1, 1, 1]} spacing='30px'>
        <Box m={2}>
          <Text fontSize='3xl' align='center' color={colorSecondary[colorMode]}>
            Upcoming Events.
          </Text>
          <EventList items={featuredEvents} />
        </Box>  
      </SimpleGrid>
      
    </Container>
  );
}
