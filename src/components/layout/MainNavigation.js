import { useSelector } from 'react-redux';
import {
  ALL_MEETUP_PAGE,
  FAVOURITES_PAGE,
  NEW_MEETUP_PAGE,
} from './../../utils/constants';

import classes from './MainNavigation.module.css';

export default function MainNavigation({ setPage }) {
  const favourites = useSelector((state) => state.meetup.favourites);
  return (
    <header className={classes.header} data-test="navigation-header">
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <a href="#" onClick={() => setPage(ALL_MEETUP_PAGE)}>
              All Meetups
            </a>
          </li>

          <li>
            <a href="#" onClick={() => setPage(NEW_MEETUP_PAGE)}>
              Add New Meetup
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setPage(FAVOURITES_PAGE)}>
              My Favourites
              <span className={classes.badge}>
                {Object.keys(favourites).length}
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
