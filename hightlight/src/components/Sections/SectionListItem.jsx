import React from "react";
import Article from "../Molecules/Article";
import Video from "../Molecules/Video";
import witchDataHighlight from "../HOCs/DataHighlight";
import PropTypes from "prop-types";

const USID = require("usid");
const usid = new USID();

const SectionListItem = (props) => {


  return (
    <li
      key={usid.rand()}
      data-id={props.id}
      className={props.className + "-item"}
    >
      <div key={usid.rand()} className={props.className + "-content"}>
        {props.type==="video"? <VideoHOC key={usid.rand()} {...props}/>: <ArticleHOC key={usid.rand()} {...props}/> }
      </div>
    </li>
  );
};

const ArticleHOC=witchDataHighlight(Article);
const VideoHOC = witchDataHighlight(Video)

SectionListItem.propTypes = {
  props: PropTypes.object,
};

export default SectionListItem;

