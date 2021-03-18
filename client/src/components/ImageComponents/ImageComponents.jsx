import React from "react";
import ImageGallery from 'react-image-gallery';

export default class ImageComponent extends React.Component {
  state = { isOpen: false };

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };


  render() {

    const array = []

    this.props.image.length === 1
      ? array.push({ original: "./uploads/profil/random-user.png", thumbnail: "./uploads/profil/random-user.png" })
      : this.props.image.map((image) => array.push({ original: image, thumbnail: image })) && array.shift()




    return (

      <div>
        { console.log(array)}
        {/*         {this.props.image.length > 1 ?
          <img
            className="photo"
            src={this.props.image[1]}
            onClick={this.handleShowDialog}
            alt={this.props.name}
          />
          :         <img
          className="photo"
          src={this.props.image[0]}
          onClick={this.handleShowDialog}
          alt={this.props.name}
        />}
 */}

        <ImageGallery items={array} />

        {/* { this.state.isOpen && (<ImageGallery items={array} />) }  */}
      </div >
    );
  }
}
