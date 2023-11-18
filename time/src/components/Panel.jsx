import React from "react";

import SectionList from "./Sections/SectionList";
import SectionListItem from "./Sections/SectionListItem";
import PropTypes from "prop-types";

const USID = require("usid");
const usid = new USID();

const Panel = (props) => {
  return (
    <>
      <div className={"container"}>
        <SectionList key={usid.rand()} className={"video"}>
          {props.list.map((item) => {
            return (
              <SectionListItem
                key={usid.rand()}
                {...item}
                className={"video-card"}
              />
            );
          })}
        </SectionList>
      </div>
    </>
  );
};

Panel.propTypes = {
  props: PropTypes.shape({
    list: PropTypes.array.isRequired,
  }),
};
export default Panel;

/** */
