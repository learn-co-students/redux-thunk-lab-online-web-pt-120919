// write your CatList component here
import React from 'react';

const CatList = (props) => {
    return (
        <div>
           {props.catPics.map((pic) => <img>{pic.source_url}</img>)}
        </div>
    );
};

export default CatList;