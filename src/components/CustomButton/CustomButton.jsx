import React, { Component } from "react";
import { Button } from "reactstrap";
// used to make this component's props into classes
import cx from "classnames";
// used for making the prop types of this component
import PropTypes from "prop-types";

class CustomButton extends Component {
  render() {
    const {
      simple,
      round,
      icon,
      neutral,
      leftLabel,
      rightLabel,
      wd,
      link,
      fab,
      className,
      ...rest
    } = this.props;

    var btnClasses = cx({
      "btn-simple": simple,
      "btn-round": round,
      "btn-icon": icon,
      "btn-neutral": neutral,
      "btn-wd": wd,
      "btn-link": link,
      "btn-fab": fab
    });

    if (className !== undefined) {
      btnClasses += " " + className;
    }

    return (
      <Button className={btnClasses} {...rest}>
        {leftLabel ? (
          <span className="btn-label">
            <i className={leftLabel} />{" "}
          </span>
        ) : null}
        {this.props.children}
        {rightLabel ? (
          <span className="btn-label btn-label-right">
            <i className={rightLabel} />{" "}
          </span>
        ) : null}
      </Button>
    );
  }
}

CustomButton.propTypes = {
  simple: PropTypes.bool,
  round: PropTypes.bool,
  icon: PropTypes.bool,
  neutral: PropTypes.bool,
  wd: PropTypes.bool,
  link: PropTypes.bool,
  fab: PropTypes.bool,
  // this is an icon
  leftLabel: PropTypes.string,
  // this is an icon
  rightLabel: PropTypes.string
};

export default CustomButton;
