import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className="flex flex-column items-center">
        <div
          className="w-100"
          style={{
            height: this.props.item.name ? 100 : 180,
            backgroundImage: `url('${this.props.item.path}')`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        />
        {this.props.item.name && (
          <div className="flex items-center justify-center mt1">
            {this.props.item.name}
          </div>
        )}
        {this.props.item.name && (
          <div className="w-50">
            <div className="flex justify-between items-center self-center mt2 w-100">
              <div className="f7">Price:</div>
              <div className="f6 b ml3 flex items-center">
                {this.props.item.price}
              </div>
            </div>
            <div className="flex justify-between items-center self-center mt1 w-100">
              <div className="f7">Savings:</div>
              <div className="f6 b ml3 flex items-center">
                {this.props.item.savings}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
