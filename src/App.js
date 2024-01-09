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
import { Outlet } from 'react-router-dom';

function App() {
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

  return (
    <div data-test="app">
      <div
        className={
          showHeader ? classes.mainNavigation : classes.hiddenMainNavigation
        }
      >
        <MainNavigation />
      </div>
      <div className={showHeader ? classes.shiftedDownLayout : classes.layout}>
        <Layout>
          <Outlet />
        </Layout>
      </div>
    </div>
  );
}

export default App;
