import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import store from '../store'
import LoginForm from "./FrontPage";

configure({ adapter: new Adapter() });

describe('<LoginForm />', function() {
  it('Should smoke test the App component', function() {
    shallow(<LoginForm store={store} />)
  });
});