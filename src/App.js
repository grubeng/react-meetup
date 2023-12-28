import { useState, useEffect, useCallback } from 'react';

import AllMeetupsPage from './pages/AllMeetupsPage';
import FavouritesPage from './pages/Favourites';
import NewMeetupsPage from './pages/NewMeetup';
import {
  ALL_MEETUP_PAGE,
  FAVOURITES_PAGE,
  NEW_MEETUP_PAGE,
} from './utils/constants';

import MainNavigation from './components/layout/MainNavigation';
import Layout from './components/layout/Layout';
import classes from './App.module.css';

function App() {
  const [page, setPage] = useState(ALL_MEETUP_PAGE);
  const [showHeader, setShowHeader] = useState(true);
  const [previousYPosition, setPreviousYPosition] = useState(window.scrollY);

  const handleVisibility = useCallback(() => {
    if (window.scrollY > previousYPosition) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
    setPreviousYPosition(window.scrollY);
  }, [previousYPosition]);

  useEffect(() => {
    window.addEventListener('scroll', handleVisibility);
    return () => {
      window.removeEventListener('scroll', handleVisibility);
    };
  }, [handleVisibility]);

  function getCurrentPageComponent() {
    let currentPageComponent = <AllMeetupsPage />;
    switch (page) {
      case FAVOURITES_PAGE:
        currentPageComponent = <FavouritesPage />;
        break;
      case NEW_MEETUP_PAGE:
        currentPageComponent = <NewMeetupsPage />;
        break;
      default:
        currentPageComponent = <AllMeetupsPage />;
    }

    return currentPageComponent;
  }

  return (
    <div data-test="app">
      <div
        className={
          showHeader ? classes.mainNavigation : classes.hiddenMainNavigation
        }
      >
        <MainNavigation setPage={setPage} />
      </div>
      <div className={showHeader ? classes.shiftedDownLayout : classes.layout}>
        <Layout>{getCurrentPageComponent()}</Layout>
      </div>
    </div>
  );
}

export default App;
