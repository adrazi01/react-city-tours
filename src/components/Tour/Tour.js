import React, { Component } from "react";

export default class Tour extends Component {
  render() {
    return (
      <article className="tour">
        <div className="img-container">
          <img
            width="200"
            src="https://images.pexels.com/photos/6913782/pexels-photo-6913782.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <span className="close-btn">
            <i className="fas fa-window-close" />
          </span>
        </div>
        <div className="tour-info">
          <h3>city</h3>
          <h4>name</h4>
          <h5>
            info{" "}
            <span>
              <i className="fas fa-caret-square-down" />
            </span>
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            sem nisl, ut imperdiet leo imperdiet suscipit. Etiam viverra elit
            nisi, a vehicula augue imperdiet nec. Vivamus quis dapibus felis. Ut
            vehicula finibus magna, sit amet lobortis odio placerat et. Cras
            interdum nec nunc ac tristique. Nullam tincidunt tellus sed erat
            pretium, quis aliquam nulla auctor.
          </p>
        </div>
      </article>
    );
  }
}
