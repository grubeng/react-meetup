import { useEffect } from 'react';
import MeetupItem from '../components/meetups/MeetupItem';
import { useGetMeetupsQuery } from '../services/meetup';
import classes from './../components/meetups/MeetupList.module.css';

export default function AllMeetupsPage() {
  const { data, error, isLoading } = useGetMeetupsQuery();

  useEffect(() => {
    console.log(window.location.origin);
    console.log(data);
  }, [data]);

  return (
    <section>
      <h1>All Meetups</h1>
      <ul className={classes.list}>
        <MeetupItem />
        <MeetupItem />
        <MeetupItem />
        <MeetupItem />
      </ul>
    </section>
  );
}
