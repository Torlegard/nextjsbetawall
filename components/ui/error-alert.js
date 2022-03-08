import { Center, Box, useColorMode } from '@chakra-ui/react';

// import classes from './error-alert.module.css';

function ErrorAlert(props) {

  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400',
  };

  return (
    <Center color={colorSecondary[colorMode]}>
      <Box>{props.children}</Box>
    </Center>
  );
}
export default ErrorAlert;
// <div className={classes.alert}>{props.children}</div>;
