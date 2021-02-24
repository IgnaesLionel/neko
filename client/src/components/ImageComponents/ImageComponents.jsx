import React from "react";

export default class ImageComponent extends React.Component {
  state = { isOpen: false };

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div>
        
        <img
          className="photo"
          src={this.props.image}
          onClick={this.handleShowDialog}
          alt={this.props.name}
        />
        {this.state.isOpen && (
          <dialog
            className="modal"
            open
            onClick={this.handleShowDialog}
          >
         
            <img
            
              src={this.props.image}
              onClick={this.handleShowDialog}
              alt={this.props.name}
            />
              <p classname="content">{this.props.content}</p>
             
          </dialog>
        )}
      </div>
    );
  }
}
