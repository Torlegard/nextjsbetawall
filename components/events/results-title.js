// import Button from '../ui/button';
// import classes from './results-title.module.css';
import { Box, Heading, Button, Center, useColorMode } from '@chakra-ui/react';
import NextLink from 'next/link';
import { ArrowBackIcon } from '@chakra-ui/icons';

function ResultsTitle(props) {
  const { date } = props;

  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400',
  };

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <Center color={colorSecondary[colorMode]}>
      <Box align='center'>
        <Heading>Events in {humanReadableDate}</Heading>
        <br />
        <NextLink href='/events' passHref>
        <Button mt={2} leftIcon={<ArrowBackIcon />} variant='outline'>
                Back to all events
              </Button>
        </NextLink>
      </Box>
    </Center>
  );
}

export default ResultsTitle;


