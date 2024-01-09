import React from 'react';
import MeetupItem from './MeetupItem';
import { render, queryByAttribute } from '@testing-library/react';
import '@testing-library/jest-dom';
import store from '../../store/store';
import { Provider } from 'react-redux';

const mockMeetup = {
  id: 'm1',
  title: 'This is a first meetup',
  image:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
  address: 'Meetupstreet 5, 12345 Meetup City',
  description:
    'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
};

const getByDataTest = queryByAttribute.bind(null, 'data-test');

describe('Meetup item', () => {
  beforeAll(() => {
    jest.mock('../../store/store', () => {
      return {
        ...jest.requireActual('../../store/store'),
        store: { ...jest.requireActual('../../store/store').configureStore() },
      };
    });
  });
  it('<MeetupItem/> renders without crashing', () => {
    const view = render(
      <Provider store={store}>
        <MeetupItem meetup={mockMeetup} />
      </Provider>
    );
    const meetupItem = getByDataTest(view.container, 'meet-up-item');
    expect(meetupItem).not.toBe(null);
  });
});
