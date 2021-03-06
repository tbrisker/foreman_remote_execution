import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import * as patternfly from '@patternfly/react-core';
import { mount, shallow } from '@theforeman/test';
import { formatter } from '../Formatter';

jest.spyOn(patternfly, 'Select');
jest.spyOn(patternfly, 'SelectOption');
jest.spyOn(patternfly, 'FormGroup');
patternfly.Select.mockImplementation(props => <div props={props} />);
patternfly.SelectOption.mockImplementation(props => <div props={props} />);
patternfly.FormGroup.mockImplementation(props => <div props={props} />);
const mockStore = configureMockStore([]);
const store = mockStore({});

describe('formatter', () => {
  it('render date input', () => {
    const props = {
      name: 'date adv',
      required: false,
      options: '',
      advanced: true,
      value_type: 'date',
      resource_type: 'ansible_roles',
      default: '',
      hidden_value: false,
    };
    expect(shallow(formatter(props, {}, jest.fn()))).toMatchSnapshot();
  });
  it('render text input', () => {
    const props = {
      name: 'plain adv hidden',
      required: true,
      description: 'some Description',
      options: '',
      advanced: true,
      value_type: 'plain',
      resource_type: 'ansible_roles',
      default: 'Default val',
      hidden_value: true,
    };
    expect(shallow(formatter(props, {}, jest.fn()))).toMatchSnapshot();
  });
  it('render select input', () => {
    const props = {
      name: 'adv plain search',
      required: false,
      input_type: 'user',
      options: 'a\r\nb\r\nc\r\nd',
      advanced: true,
      value_type: 'plain',
      resource_type: 'ansible_roles',
      default: '',
      hidden_value: false,
    };
    expect(shallow(formatter(props, {}, jest.fn()))).toMatchSnapshot();
  });
  it('render search input', () => {
    const props = {
      name: 'search adv',
      required: false,
      options: '',
      advanced: true,
      value_type: 'search',
      resource_type: 'foreman_tasks/tasks',
      default: '',
      hidden_value: false,
    };
    expect(
      mount(
        <Provider store={store}>{formatter(props, {}, jest.fn())}</Provider>
      )
    ).toMatchSnapshot();
  });
});
