import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import store from '../store'
import RegistrationForm from './registration-page'

configure({ adapter: new Adapter() });

describe('<RegistrationForm />', function() {
  it('Should smoke test the App component', function() {
    shallow(<RegistrationForm store={store} />)
  });
});