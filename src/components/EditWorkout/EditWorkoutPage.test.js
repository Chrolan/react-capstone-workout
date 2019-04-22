import React from 'react';
import { shallow, configure } from 'enzyme/build';
import Adapter from 'enzyme-adapter-react-16/build';
import store from '../../Store'
import {EditWorkoutPage} from "./EditWorkoutPage";

configure({ adapter: new Adapter() });

describe('<EditWorkoutPage />', function() {
  it('Should smoke test the App component', function() {
    shallow(<EditWorkoutPage store={store} />)
  });
});