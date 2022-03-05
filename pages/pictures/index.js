import Head from 'next/head';
import Container from '../../components/Container';
import { useColorMode, Heading, Text, Flex, Stack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react';
import customTheme from '../../styles/theme';

function PicturePage() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400',
  };

  return (
    <Container>
      <Head>
        <title>BetaWall • Pictures</title>
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
        <Heading alignItems='center' mb='2'>
          Fan Pictures of the Month!
        </Heading>
      </Stack>

      {/* On XL There's two columns then automatically changes to 1 on smaller screens.  */}
      <SimpleGrid columns={[1, 1, 1, 2]} spacing='30px'>
        <Box>
          <Image src='/images/picture1.jpg' alt='Dan Abramov' />
          <Text align='center' color={colorSecondary[colorMode]}>
            John Anonymsson trying to pose as the Jesus-statue in Rio De Janeiro. <br /> Photo: Abraham Golfer
          </Text>
        </Box>
        <Box>
          <Image src='/images/picture2.jpg' alt='Nigel Thornberry' />
          <Text align='center' color={colorSecondary[colorMode]}>
            Nigel Thornberry wore too much gear to ever be able to get to the top. He's now worn out. <br /> Photo: Mac
            Donald
          </Text>
        </Box>
        <Box>
          <Image src='/images/picture3.jpg' alt='Nigel Thornberry' />
          <Text align='center' color={colorSecondary[colorMode]}>
            Alps in the summer is one of the best places on earth! <br /> Photo: Lisa Godless
          </Text>
        </Box>
        <Box>
          <Image src='/images/picture4.jpg' alt='Nigel Thornberry' />
          <Text align='center' color={colorSecondary[colorMode]}>
            So high you can high-five a plane! <br /> Photo: Jack Dipper
          </Text>
        </Box>
      </SimpleGrid>
    </Container>
  );
}
export default PicturePage;
