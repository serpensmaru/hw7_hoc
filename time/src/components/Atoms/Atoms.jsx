import React from "react";

import PropTypes from "prop-types";


export const DateTime = (data) => {
  if (!data) {
    return null;
  }
  return (
    <React.Fragment>
      <span className={data.className + " date"}>{data.date}</span>
    </React.Fragment>
  );
};

DateTime.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
};

export const Video = (data) => {
  if (!data) {
    return null;
  }
  return (
    <React.Fragment>
      <iframe
        title={data.name}
        className={data.className}
        src={data.url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </React.Fragment>
  );
};
Video.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

