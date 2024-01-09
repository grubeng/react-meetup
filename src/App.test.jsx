import React from 'react';
import App from './App';
import { render, queryByAttribute } from '@testing-library/react';
import store from '../src/store/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const getByDataTest = queryByAttribute.bind(null, 'data-test');

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
      </Provider>,
      { wrapper: BrowserRouter }
    );
    const app = getByDataTest(view.container, 'app');
    expect(app).not.toBe(null);
  });
});
