import { useDispatch } from 'react-redux';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';
import { addMeetup } from '../../store/meetupSlice';
import { generateUniqueId } from '../../utils/meetup';

export default function NewMeetupForm() {
  const dispatch = useDispatch();

  function submitHandler(event) {
    event.preventDefault();
    try {
      const newMeetup = {
        id: generateUniqueId(),
        title: event.target.querySelector('#title').value,
        image: event.target.querySelector('#image').value,
        address: event.target.querySelector('#address').value,
        description: event.target.querySelector('#description').value,
      };
      dispatch(addMeetup(newMeetup));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" required rows="5"></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
