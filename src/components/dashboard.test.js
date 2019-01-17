import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from './dashboard'
import store from '../store'

configure({ adapter: new Adapter() });

describe('<Dashboard />', function() {
  it('Should smoke test the App component', function() {
    shallow(<Dashboard store={store} />)
  });
});