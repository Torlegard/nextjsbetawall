import Head from 'next/head';
import { useColorMode, Heading, Text, Flex, Stack } from '@chakra-ui/react';

import Container from '../../components/container';

function AllEventsPage() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400',
  };
  
  return (
    <Container>
      <Head>
        <title>BetaWall • Events</title>
      </Head>
      <div>
        <h1>Events</h1>
      </div>
    </Container>
  );
}

export default AllEventsPage;
