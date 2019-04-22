import React from 'react';
import { shallow, configure } from 'enzyme/build';
import Adapter from 'enzyme-adapter-react-16/build';
import store from '../../Store'
import LoginForm from "./FrontPage";

configure({ adapter: new Adapter() });

describe('<LoginForm />', function() {
  it('Should smoke test the App component', function() {
    shallow(<LoginForm store={store} />)
  });
});