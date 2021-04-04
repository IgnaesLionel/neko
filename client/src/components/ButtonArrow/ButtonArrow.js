import React from 'react';

const ButtonArrow = (props) => {
    return (
        <div id="container">
        <button class="learn-more">
          <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
          </span>
          <span class="button-text">{props.buttonName}</span>
        </button>
      </div>
    );
};

export default ButtonArrow;