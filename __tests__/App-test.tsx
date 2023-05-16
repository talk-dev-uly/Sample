/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import {onSubmit} from '../App';
import {InfoForm} from '../types';

it('renders correctly', () => {
  renderer.create(<App />);
});

it('create user correctly', async () => {
  const data: InfoForm = {
    firstName: 'Harry',
    lastName: 'Potter',
    middleName: 'Batumbakal',
    job: 'Wizard',
  };
  const result = await onSubmit(data);
  expect(result).toStrictEqual({
    name: 'Potter, Harry Batumbakal',
    job: 'Wizard',
    created: true,
  });
});
