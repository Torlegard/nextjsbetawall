import { useRouter } from 'next/router';
import { Fragment, } from 'react';
import { getFilteredEvents } from '../../dummy-data';
import Container from '../../components/Container';
import ErrorAlert from '../../components/ui/error-alert';
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/button';

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
        <Fragment>
          <ErrorAlert>
            <p>Invalid Filter.</p>
          </ErrorAlert>
          <div className='center'>
            <Button link='/events'>Show All Events</Button>
          </div>
        </Fragment>
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
        <Fragment>
          <ErrorAlert>
            <p>No events found.</p>
          </ErrorAlert>
          <div className='center'>
            <Button link='/events'>Show All Events</Button>
          </div>
        </Fragment>
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
