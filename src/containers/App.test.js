import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { App } from './App';

describe('<App />', () => {
  it('should render an h1', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').text()).to.equal('Hotlinks')
  })
})