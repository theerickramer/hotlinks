import React from 'react';
import { shallow, mount } from 'enzyme';
import { App } from './App';

describe('<App />', () => {
	
	test('renders', () => {
		const wrapper = shallow(<App />);
		expect(wrapper).toHaveLength(1);
	})

	test('renders HotlinkForm', () => {
		const mockDispatch = jest.fn();
		const wrapper = mount(<App hotlinks={[]} dispatch={mockDispatch} />);
		expect(wrapper.find('HotlinkForm')).toHaveLength(1);
	})
})