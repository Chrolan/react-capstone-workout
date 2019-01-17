import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import store from '../store'
import {CreateWorkoutPage} from "./create-workout-page";

configure({ adapter: new Adapter() });

describe('<CreateWorkoutPage />', function() {
  it('Should smoke test the App component', function() {
    shallow(<CreateWorkoutPage store={store} />)
  });
});