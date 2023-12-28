import classes from './MeetupItem.module.css';
import Card from '../ui/Card';
import { useDispatch, useSelector } from 'react-redux';
import {
  addMeetupToFavourites,
  removeMeetupFromFavourites,
} from '../../store/meetupSlice';

export default function MeetupItem({ meetup }) {
  const favourites = useSelector((state) => state.meetup.favourites);
  const dispatch = useDispatch();

  function handleAddToFavourites() {
    dispatch(addMeetupToFavourites(meetup));
  }

  function handleRemoveFromFavourites() {
    dispatch(removeMeetupFromFavourites(meetup));
  }

  function isFavourite(id) {
    const favouriteMeetupIds = Object.keys(favourites);
    return favouriteMeetupIds.includes(id);
  }

  return (
    <li className={classes.item} data-test="meet-up-item">
      <Card>
        <div className={classes.image}>
          <img src={meetup?.image} alt={meetup?.title} />
        </div>
        <div className={classes.content}>
          <h3>{meetup?.title}</h3>
          <address>{meetup?.address}</address>
          <p>{meetup?.description}</p>
        </div>
        {!isFavourite(meetup.id) ? (
          <div className={classes.actions}>
            <button onClick={handleAddToFavourites}>Add to favourites</button>
          </div>
        ) : (
          <div className={classes.actions}>
            <button onClick={handleRemoveFromFavourites}>
              Remove from favourites
            </button>
          </div>
        )}
      </Card>
    </li>
  );
}
