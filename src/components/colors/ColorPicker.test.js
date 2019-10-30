import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

describe('ColorPicker component', () => {
  it('renders ColorPicker', () => {
    const wrapper = shallow(<ColorPicker colors={['blue', 'red', 'yellow']} />);
    expect(wrapper).toMatchSnapshot();
  });
});
