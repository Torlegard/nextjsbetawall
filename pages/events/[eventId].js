import { useRouter } from 'next/router';
import { getEventById, getFilteredEvents } from '../../dummy-data';
import { Fragment } from 'react';
import NextLink from 'next/link';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Box, Heading, Button, Center } from '@chakra-ui/react';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';
import Container from '../../components/Container';

// This page shows up if in the url you have /events/2021 or similar. NOT /events/2021/[anything else]
function EventDetailPage() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);


  if (!event) {
    return (
      <Container>
        <Center>
          <Box align='center'>
            <ErrorAlert>
              <Heading>No events found!</Heading>
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

  return (
    <Container>
      <Fragment>
        <EventSummary title={event.title} />
        <EventLogistics
          date={event.date}
          address={event.location}
          image={event.image}
          imageAlt={event.title}
        />
        <EventContent>
          <p>{event.description}</p>
        </EventContent>
      </Fragment>
    </Container>
  );
}
export default EventDetailPage;
