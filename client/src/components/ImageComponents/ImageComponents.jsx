import React from "react";
export default class ImageComponent extends React.Component {
  state = { isOpen: false };

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log("cliked");
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
            className="dialog"
            style={{ position: "absolute", margin: "0", margin: 'auto'}}
            open
            onClick={this.handleShowDialog}
          >
            <img
              className=""
              src={this.props.image}
              onClick={this.handleShowDialog}
              alt={this.props.name}
            />
          </dialog>
        )}
      </div>
    );
  }
}
