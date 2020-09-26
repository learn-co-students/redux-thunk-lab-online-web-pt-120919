import React from "react";

const CatList = props => {
  console.log(props);
  return (
    <div>
      {props.catPics.length > 0 &&
        props.catPics.map(catImg => <img src={catImg.url}></img>)}
    </div>
  );
};

export default CatList;
