import React from 'react';
import { shallow, configure } from 'enzyme/build';
import Adapter from 'enzyme-adapter-react-16/build';
import store from '../../Store'
import RegistrationForm from './RegistrationPage'

configure({ adapter: new Adapter() });

describe('<RegistrationForm />', function() {
  it('Should smoke test the App component', function() {
    shallow(<RegistrationForm store={store} />)
  });
});