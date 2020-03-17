import React from 'react';
import { shallow } from 'enzyme';
import DataSheet from './DataSheet';

describe('<DataSheet />', () => {
  test('renders', () => {
    const wrapper = shallow(<DataSheet />);
    expect(wrapper).toMatchSnapshot();
  });
});
