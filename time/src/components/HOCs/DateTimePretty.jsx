import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import 'moment/locale/ru';


const witchDateTimePretty = (Component) => {
  const HOCComponent = (props) => {
    const { date } = props;

    const transformPrettyTime = moment(date).fromNow();
    console.log(transformPrettyTime, '123456')

    return <Component {...props} date={transformPrettyTime} />;
  };
  HOCComponent.displayName = "transformDatetimeHOC";
  
  return HOCComponent;
};

witchDateTimePretty.propTypes = {
  dateTime: PropTypes.string.isRequired,
};

export default witchDateTimePretty;
