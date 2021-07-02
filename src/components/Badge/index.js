import React from "react";
import PropTypes from "prop-types";
import StyledBadge, { Count } from "./style";

function Badge({ children, show = false, showZero = false, count = 0, ...rest }) {
  return (
    <StyledBadge variant={children ? "dot" : "default"} {...rest} show={show} count={count} showZero={showZero}>
      {children || <Count>{count}</Count>}
    </StyledBadge>
  );
}

Badge.propTypes = {
  show: PropTypes.bool,
  count: PropTypes.number,
  showZero: PropTypes.bool,
  children: PropTypes.any,
};

export default Badge;
