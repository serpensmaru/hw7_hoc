import React from "react";
import New from "../Views/New"
import Popular from "..//Views/Popular";
import PropTypes from "prop-types";


const witchDataHighlight = (Component) => {
  const HOCComponent = (props) => {
    const { views } = props;

    if (views < 100) {
    
      return (
        <New>
          <Component {...props} />
        </New>
      );
    } else if (views > 1000) {
  
      return (
        <Popular>
          <Component {...props} />
        </Popular>
      );
    }
    return <Component {...props} />;
  };
  HOCComponent.displayName = "wrapped";

  return HOCComponent;
};

witchDataHighlight.propTypes = {
  views: PropTypes.string.isRequired,
};

export default witchDataHighlight;
