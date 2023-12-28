import { useSelector } from 'react-redux';
import classes from './../components/meetups/MeetupList.module.css';
import MeetupItem from '../components/meetups/MeetupItem';

export default function FavoritesPage() {
  const favouriteMeetups = useSelector((store) => store.meetup.favourites);

  return (
    <section>
      <h1>Favorites Page</h1>
      <ul className={classes.list}>
        {favouriteMeetups &&
          Object.values(favouriteMeetups).map((meetup) => (
            <MeetupItem meetup={meetup} key={meetup.id + 'card'} />
          ))}
      </ul>
    </section>
  );
}
