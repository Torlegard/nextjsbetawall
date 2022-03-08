import { Fragment } from 'react';
import { useColorMode } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventSearch from '../../components/events/events-search';
import Container from '../../components/Container';



function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents();

  const { colorMode } = useColorMode();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }
    const colorSecondary = {
      light: 'gray.700',
      dark: 'gray.400',
    };

    return (
      <Container>
        <Head>
          <title>BetaWall • Events</title>
        </Head>
        <Fragment>
          <EventSearch onSearch={findEventsHandler} />
          <EventList items={events} />
        </Fragment>
      </Container>
    );
  
}
export default AllEventsPage;
