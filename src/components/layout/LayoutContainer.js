import React from "react";
import PropTypes from 'prop-types';
import Container from "@material-ui/core/Container";

import { useStyles } from "./layoutContainerStyles";

const LayoutContainer = ({ children }) => {
  const classes = useStyles();
  return <Container className={classes.root}>{children}</Container>;
};

LayoutContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
};

export default LayoutContainer;
