import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from './NotFoundPage';

describe('<NotFoundPage />', () => {
  test('renders', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
