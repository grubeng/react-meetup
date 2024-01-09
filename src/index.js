import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import './index.css';
import App from './App';
import AllMeetupsPage from './pages/AllMeetupsPage';
import FavouritesPage from './pages/Favourites';
import NewMeetupsPage from './pages/NewMeetup';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <AllMeetupsPage />,
      },
      {
        path: '/favourites',
        element: <FavouritesPage />,
      },
      {
        path: '/new',
        element: <NewMeetupsPage />,
      },
    ],
  },
]);

ReactDOM.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
  document.getElementById('root')
);
