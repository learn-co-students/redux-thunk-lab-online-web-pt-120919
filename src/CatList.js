import React, { Component } from 'react';

class CatList extends Component {
    listCats = () => {
        return this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id} />)
    }

    render(){
        return(
            <div>
                {/* {this.props.catPics.map(pic => {return <img key={pic.id} src={pic.url} alt={pic.id}/>})} */}
                {this.listCats()}
            </div>
        )
    }
}

export default CatList