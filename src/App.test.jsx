import React from 'react';
import App from './App';
import MainNavigation from './components/layout/MainNavigation';
import Layout from './components/layout/Layout';
import { render } from '@testing-library/react';
import store from '../src/store/store';
import { Provider } from 'react-redux';
// import {
//   useGetMeetupsQuery,
//   meetupApi,
//   setMeetUpsMiddleware,
// } from '../src/services/meetup';

// jest.mock('../src/services/meetup', () => {
//   return {
//     ...jest.requireActual('../src/services/meetup'),
//     setMeetUpsMiddleware: () => {},
//     meetupApi: {
//       ...jest.requireActual('../src/services/meetup').meetupApi,
//       useGetMeetupsQuery: () => ({
//         data: [
//           {
//             id: 'm1',
//             title: 'This is a first meetup',
//             image:
//               'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//             address: 'Meetupstreet 5, 12345 Meetup City',
//             description:
//               'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//           },
//           {
//             id: 'm2',
//             title: 'This is a second meetup',
//             image:
//               'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//             address: 'Meetupstreet 5, 12345 Meetup City',
//             description:
//               'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//           },
//           {
//             id: 'm3',
//             title: 'This is a third meetup',
//             image:
//               'https://www.deutschakademie.de/muenchen/blog/wp-content/uploads/2021/03/Mu%CC%88nchen-Alemania.jpg',
//             address: 'Meetupstreet 5, 12345 Meetup City',
//             description:
//               'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//           },
//         ],
//         isLoading: false,
//         error: null,
//       }),
//     },
//   };
// });

jest.mock('../src/services/meetup', () => {
  return {
    ...jest.requireActual('../src/services/meetup'),
    useGetMeetupsQuery: () => ({
      data: [
        {
          id: 'm1',
          title: 'This is a first meetup',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
          address: 'Meetupstreet 5, 12345 Meetup City',
          description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
        },
        {
          id: 'm2',
          title: 'This is a second meetup',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
          address: 'Meetupstreet 5, 12345 Meetup City',
          description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
        },
        {
          id: 'm3',
          title: 'This is a third meetup',
          image:
            'https://www.deutschakademie.de/muenchen/blog/wp-content/uploads/2021/03/Mu%CC%88nchen-Alemania.jpg',
          address: 'Meetupstreet 5, 12345 Meetup City',
          description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
        },
      ],
      isLoading: false,
      error: null,
    }),
  };
});

describe('App', () => {
  beforeAll(() => {});
  jest.mock('../src/store/store', () => {
    return {
      ...jest.requireActual('../src/store/store'),
      store: { ...jest.requireActual('../src/store/store').createStore() },
    };
  });

  it('Renders App without crashing', () => {
    const view = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(view).not.toBe(null);
  });
});
