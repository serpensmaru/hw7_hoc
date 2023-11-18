import React from "react";


const SectionList = ({ className, children })=> {


  return (
    <React.Fragment>
      <ul className={className + "-list"}>
        {React.Children.map(children, (child) => {
  
          return child;
        })}
      </ul>
    </React.Fragment>
  );
};

export default SectionList;