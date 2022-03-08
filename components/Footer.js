import {
  Box,
  chakra,
  Container,
  Button,
  IconButton,
  Spacer,
  Center,
  Flex,
  useColorMode,
  VisuallyHidden,
} from '@chakra-ui/react';
import Logo from './Logo';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import NextLink from 'next/link';

function SmallFooter() {
  const { colorMode } = useColorMode();

  return (
    <Center>
      <Flex mt='5rem' spacing='2px' h='3rem' justify='center' w='50%' bg={[colorMode]}>
        <Flex align='flex-end'>
          <NextLink href='/' passHref>
            <Button p='2' as='a' variant='link'>
              Home
            </Button>
          </NextLink>
          <NextLink href='/' passHref>
            <Button p='2' as='a' variant='link'>
              Contact
            </Button>
          </NextLink>
          <NextLink href='/' passHref>
            <Button p='2' as='a' variant='link'>
              About
            </Button>
          </NextLink>
        </Flex>

        <Flex align='center'>
          <NextLink href='https://twitter.com'>
            <IconButton bg={[colorMode]} mx={1} as={FaTwitter} />
          </NextLink>
          <NextLink href='https://instagram.com'>
            <IconButton bg={[colorMode]} mx={1} as={FaInstagram} />
          </NextLink>
          <NextLink href='https://youtube.com'>
            <IconButton bg={[colorMode]} mx={1} as={FaYoutube} />
          </NextLink>
        </Flex>
      </Flex>
    </Center>
  );
}
export default SmallFooter;
