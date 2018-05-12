import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import CONSTANTS from 'react-bulma-components/lib/constants';

import Switch from '.';

class ControlledSwitch extends React.PureComponent {
  state = {
    value: false,
  }
  render() {
    return <Switch onChange={() => this.setState({ value: !this.state.value })} value={this.state.value} {...this.props} />;
  }
}

storiesOf('Switch', module)
  .addDecorator(story => (
    <div style={{ margin: 10 }}>
      {story()}
    </div>
  ))
  .add('Default', withInfo('Switch Implementation')(() => (
    <div>
      <Switch>Off</Switch>
      <Switch value>On</Switch>
    </div>
  )))
  .add('Controlled Switch\'s', withInfo('Switch Implementation')(() => (
    <div>
      <ControlledSwitch />
      <ControlledSwitch>Click on the text</ControlledSwitch>
    </div>
  )))
  .add('Colors', withInfo('')(() => (
    <div>
      {
        Object.values(CONSTANTS.COLORS).map(color => (
          <Switch value color={color}>{color}</Switch>
        ))
      }
    </div>
  )))
  .add('Size', withInfo('')(() => (
    <div>
      {
        ['small', null, 'medium', 'large'].map(size => (
          <Switch value size={size}>Switch {size}</Switch>
        ))
      }
    </div>
  )))
  .add('Other Styles', withInfo('')(() => (
    <div>
      <Switch value rounded>Switch Rounded</Switch>
      <Switch value thin>Switch Thin</Switch>
      <Switch value rtl>Switch Text on the left</Switch>
      <Switch value outlined>Switch Outlined</Switch>
      <Switch value disabled>Switch Disabled</Switch>
    </div>
  )));
