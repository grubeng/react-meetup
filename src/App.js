import { useState } from 'react';

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

function App() {
  const [page, setPage] = useState(ALL_MEETUP_PAGE);

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
      <MainNavigation setPage={setPage} />
      <Layout>{getCurrentPageComponent()}</Layout>
    </div>
  );
}

export default App;
