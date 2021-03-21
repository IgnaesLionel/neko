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

    const randomNumber = (min, max) => {
        return Math.random() * (max - min) + min;
      }


    return (
      <div className="imageGallery">
        <ImageGallery items={array} showBullets={false} showThumbnails={false} autoPlay={true} slideDuration={1000} slideInterval={randomNumber(4000,7000)} />
      </div >
    );
  }
}
