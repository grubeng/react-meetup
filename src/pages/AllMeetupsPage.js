import { useEffect } from 'react';
import MeetupItem from '../components/meetups/MeetupItem';
import { useGetMeetupsQuery } from '../services/meetup';
import classes from './../components/meetups/MeetupList.module.css';
import { useSelector } from 'react-redux';

export default function AllMeetupsPage() {
  const { error, isLoading } = useGetMeetupsQuery();
  const meetups = useSelector((store) => store.meetup.meetups);

  if (error) return <p>Error retrieving meetup data</p>;

  if (isLoading) return <p>Loading...</p>;

  return (
    <section>
      <h1>All Meetups</h1>
      <ul className={classes.list}>
        {meetups &&
          Object.values(meetups).map((meetup, i) => (
            <MeetupItem key={meetup.id + 'card'} />
          ))}
      </ul>
    </section>
  );
}
