import React from 'react';
import { shallow, configure } from 'enzyme/build';
import Adapter from 'enzyme-adapter-react-16/build';
import store from '../../Store'
import {CreateWorkoutPage} from "./CreateWorkoutPage";

configure({ adapter: new Adapter() });

describe('<CreateWorkoutPage />', function() {
  it('Should smoke test the App component', function() {
    shallow(<CreateWorkoutPage store={store} />)
  });
});