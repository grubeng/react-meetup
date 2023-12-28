import { useSelector } from 'react-redux';
import classes from './../components/meetups/MeetupList.module.css';
import MeetupItem from '../components/meetups/MeetupItem';

export default function FavouritesPage() {
  const favouriteMeetups = useSelector((store) => store.meetup.favourites);

  return (
    <section>
      <h1>Favourites Page</h1>
      <ul className={classes.list}>
        {favouriteMeetups &&
          Object.values(favouriteMeetups).map((meetup) => (
            <MeetupItem meetup={meetup} key={meetup.id + 'card'} />
          ))}
      </ul>
    </section>
  );
}
