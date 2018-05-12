import React from 'react';
import renderer from 'react-test-renderer';
import Switch from '..';

describe('Switch component', () => {
  it('Should Exist', () => {
    expect(Switch).toMatchSnapshot();
  });
  it('Should have Switch classname', () => {
    const component = renderer.create(<Switch id="test">Facebook</Switch>);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should concat Bulma class with classes in props', () => {
    const component = renderer.create(<Switch id="test" className="other-class test">Facebook</Switch>);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should create random id if no id passed', () => {
    const component = renderer.create(<Switch>Switch 1</Switch>);
    const component2 = renderer.create(<Switch>Switch 2</Switch>);
    expect(component.getInstance().id).not.toEqual(component2.getInstance().id);
  });
});
