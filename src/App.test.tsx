import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

describe('Test Case For App', () => {
  it('should render button', () => {
    const wrapper = shallow(<App />)
    const getStartedButton  = wrapper.find('#getStartedButton');
    expect(getStartedButton).toHaveLength(1);
    expect(getStartedButton.text()).toEqual('Get Started');
  })
  });
  