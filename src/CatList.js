import React from 'react';

class CatList extends React.Component {

    render() {
        let catPics = this.props.catPics.map((cat, index) => 
            <img key={index} src={cat.url} alt={cat.id} />
        );

        return (
            <div>
                {catPics}
            </div>
        );
    }

};

export default CatList;