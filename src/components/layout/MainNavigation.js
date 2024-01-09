import { useSelector } from 'react-redux';

import classes from './MainNavigation.module.css';
import { Link } from 'react-router-dom';

export default function MainNavigation({ className }) {
  const favourites = useSelector((state) => state.meetup.favourites);

  return (
    <header className={classes.header} data-test="navigation-header">
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to={''}> All Meetups</Link>
          </li>

          <li>
            <Link to={'new'}>Add New Meetup</Link>
          </li>
          <li>
            <Link to={'favourites'}>
              My Favourites
              <span className={classes.badge}>
                {Object.keys(favourites).length}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
