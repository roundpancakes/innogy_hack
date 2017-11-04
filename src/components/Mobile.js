import React, { Component } from "react";
import InnoSvet from './InnoSvet'
import phoneBody from "../assets/Body.png";

export default class Mobile extends Component {
  render() {
    return (
      <div
        className="flex items-center justify-center vh-100"
        style={{ background: "url('https://i.imgur.com/AMf9X7E.jpg')" }}
      >
        <div
          style={{
            backgroundImage: `url('${phoneBody}')`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: 360,
            height: 715,
            position: "absolute",
            pointerEvents: "none"
          }}
        />
        <div
          style={{
            width: 312,
            height: 671,
            borderRadius: 32,
            overflow: "hidden"
          }}
        >
          <InnoSvet />
        </div>
      </div>
    );
  }
}
