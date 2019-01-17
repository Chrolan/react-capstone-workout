import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import store from '../store'
import {EditWorkoutPage} from "./edit-workout-page";

configure({ adapter: new Adapter() });

describe('<EditWorkoutPage />', function() {
  it('Should smoke test the App component', function() {
    shallow(<EditWorkoutPage store={store} />)
  });
});