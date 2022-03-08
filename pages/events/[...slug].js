import { useRouter } from 'next/router';
import { Fragment, } from 'react';
import { Box, Heading, Center, Button } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { getFilteredEvents } from '../../dummy-data';
import Container from '../../components/Container';
import ErrorAlert from '../../components/ui/error-alert';
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
// import Button from '../../components/ui/button';

function FilteredEventsPage() {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className='center'>Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const NumMonth = +filteredMonth;

  if (isNaN(numYear) || isNaN(NumMonth) || numYear > 2030 || numYear < 2021 || NumMonth < 1 || NumMonth > 12) {
    return (
      <Container>
        <Center>
          <Box align='center'>
            <ErrorAlert>
              <Heading>Invalid Filter!</Heading>
            </ErrorAlert>
            <NextLink href='/events' passHref>
              <Button mt={2} leftIcon={<ArrowBackIcon />} variant='outline'>
                Back to all events.
              </Button>
            </NextLink>
          </Box>
        </Center>
        
      </Container>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: NumMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Container>
        <Center>
          <Box align='center'>
            <ErrorAlert>
              <Heading>No Events for that date!</Heading>
            </ErrorAlert>
            <NextLink href='/events' passHref>
              <Button mt={2} leftIcon={<ArrowBackIcon />} variant='outline'>
                Back to all events.
              </Button>
              </NextLink>
          </Box>
        </Center>
      </Container>
    );
  }

  const date = new Date(numYear, NumMonth - 1);
  return (
    <Container>
      <Fragment>
        <ResultsTitle date={date} />
        <EventList items={filteredEvents} />
      </Fragment>
    </Container>
  );
}
export default FilteredEventsPage;
