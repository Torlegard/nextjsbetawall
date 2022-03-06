import { Box, Text, Icon, useColorMode } from '@chakra-ui/react';
import { FaSearch, FaDollarSign, FaUserFriends } from 'react-icons/fa';
import { SimpleGrid } from '@chakra-ui/react';

function FeatureGrid() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400',
  };
  return (
    <SimpleGrid  width='90vw' columns={3} spacingX='100px'>
      <Box align='center'>
        <Icon color='orange.200' as={FaSearch} aria-label='Find Rocks' boxSize='50px' />
        <Text fontSize='2xl' color={colorSecondary[colorMode]}>
          Finding crags made easier.
        </Text>
        <Text fontSize='xl' color={colorSecondary[colorMode]} as='i'>
          Simple app & map for finding your crags.
        </Text>
      </Box>
      <Box align='center'>
        <Icon color='orange.200' as={FaDollarSign} aria-label='Always free' boxSize='50px' />
        <Text fontSize='2xl' color={colorSecondary[colorMode]}>
          Will always be free to use.
        </Text>
        <Text fontSize='xl' color={colorSecondary[colorMode]} as='i'>
          We won't let you pay.
        </Text>
      </Box>
      <Box align='center'>
        <Icon color='orange.200' as={FaUserFriends} aria-label='Find Others' boxSize='50px' />
        <Text fontSize='2xl' color={colorSecondary[colorMode]}>
          Find other climbers.
        </Text>
        <Text fontSize='xl' color={colorSecondary[colorMode]} as='i'>
          Connect with other climbers in your area.
        </Text>
      </Box>
    </SimpleGrid>
  );
}
export default FeatureGrid;
