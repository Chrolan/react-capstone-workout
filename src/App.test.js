import React from 'react';
import { shallow, configure } from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<App />', function() {
  it('Should smoke test the App component', function() {
    shallow(<App dispatch={jest.fn} />)
  });
});