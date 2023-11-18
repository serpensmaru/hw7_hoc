import React from "react";
import { DateTime, Video } from "../Atoms/Atoms";
import witchDateTimePretty from "../HOCs/DateTimePretty";
import PropTypes from "prop-types";

const USID = require("usid");
const usid = new USID();
const DataTimePretty = witchDateTimePretty(DateTime);

const SectionListItem = (props) => {
  console.log(props, 'propsItem')
  return (
    <li
      key={usid.rand()}
      data-id={props.id}
      className={props.className + "-item"}
    >
      <div key={usid.rand()} className={props.className + "-content"}>
        <Video
          key={usid.rand()}
          {...props}
          className={props.className + " video"}
        ></Video>
        <DataTimePretty
          key={usid.rand()}
          {...props}
          text={props.dateTime}
          className={props.className}
        ></DataTimePretty>
      </div>
    </li>
  );
};

SectionListItem.propTypes = {
  props: PropTypes.object
};

export default SectionListItem;
