import React from 'react';
import PropTypes from 'prop-types';
import Label from 'react-bulma-components/lib/components/form/components/label';
import Field from 'react-bulma-components/lib/components/form/components/field';
import CONSTANTS from 'react-bulma-components/lib/constants';
import classnames from 'classnames';

import './index.sass';

export default class Switch extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    value: PropTypes.bool,
    rtl: PropTypes.bool,
    rounded: PropTypes.bool,
    outlined: PropTypes.bool,
    thin: PropTypes.bool,
    disabled: PropTypes.bool,
    color: PropTypes.oneOf(Object.values(CONSTANTS.COLORS)),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    className: PropTypes.string,
  }

  static defaultProps = {
    children: null,
    id: null,
    value: false,
    rtl: false,
    rounded: false,
    outlined: false,
    thin: false,
    disabled: false,
    color: null,
    size: null,
    className: null,
  }

  constructor(props) {
    super(props);
    this.id = props.id || `bulmaswitch-${Math.random()}`;
  }

  render() {
    const { children, className, id, value, rtl, color, size, rounded, outlined, thin, ...props } = this.props;
    return (
      <Field className={className}>
        <input
          id={this.id}
          type="checkbox"
          className={classnames('switch', {
            'is-rtl': rtl,
            'is-rounded': rounded,
            'is-outlined': outlined,
            'is-thin': thin,
            [`is-${color}`]: color,
            [`is-${size}`]: size,
          })}
          value={value}
          checked={value}
          {...props}
        />
        <Label htmlFor={this.id}>
          {children}
        </Label>
      </Field>
    );
  }
}
