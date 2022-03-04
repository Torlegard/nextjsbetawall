
// import classes from modules is required to use the module.css so we can asssign them to the html elements.
// This let's us use the css module for just the class you have imported. 
import classes from './event-item.module.css';
import Button from '../ui/button';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';

// use props to extract data from outside, Use object destructuring to pull out data from props.
function EventItem(props) {
  const { title, image, date, location, id } = props;

  // Changing the date from Dummy-data so it'll look better when we read it on the site.
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  // Changing comma + white space to a new line. This will put the address in a more readable style.
  const formattedAddress = location.replace(', ', '\n');

  // Let's us use exploreLink on button-click to get to the dynamic path of event id's.
  const exploreLink = `/events/${id}`;

  // Return a list item and the html code defines how such an eventitem should be output
  return (
    <li className={classes.item}>
      <img src={'/' + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
export default EventItem;
