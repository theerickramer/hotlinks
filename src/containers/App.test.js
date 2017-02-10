import React from 'react';
import { Provider } from 'react-redux';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { App } from './App';
import { getHotlinks } from '../store/actions';
import { default as ConnectedApp } from './App';
import jsdom from 'jsdom';

const document = jsdom.jsdom();
global.document = document;
global.window = document.defaultView;

describe('<App />', () => {
  it('should render an h1', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').text()).to.equal('Hotlinks')
  });

  describe('connected App', () => {
    const middlewares = [thunk]
    const mockStore = configureMockStore(middlewares);
    let connectedApp, store, initialItems;

    beforeEach(() => {
      initialItems = ['one'];
      const initialState = {
        hotlinks: initialItems
      };
      store = mockStore(initialState);
    });

    describe('state provided by store', () => {
      beforeEach(() => {
        connectedApp = mount(<Provider store={store}><ConnectedApp /></Provider>)
      })
      it('passes down items', () => {
        expect(connectedApp.find('App').props().hotlinks).to.equal(initialItems);
      })
    })
  })
})