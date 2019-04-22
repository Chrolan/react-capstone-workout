import React from 'react';
import { shallow, configure } from 'enzyme/build';
import Adapter from 'enzyme-adapter-react-16/build';
import Dashboard from './Dashboard'
import store from '../../Store'

configure({ adapter: new Adapter() });

describe('<Dashboard />', function() {
  it('Should smoke test the App component', function() {
    shallow(<Dashboard store={store} />)
  });
});