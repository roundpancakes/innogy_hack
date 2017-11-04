import React, { Component } from "react";
import Carousel from "nuka-carousel";
import Card from "./Card";
import botStore from "../stores/botStore";
import { nextBotState } from "../actions/botAction";
import "./App.css";

export default class Emma extends Component {
  render() {
    return (
      <div
        className="flex h-100 w-100 flex-column absolute bg-black-40"
        style={{
          transition: "all .5s ease",
          top: this.props.isHidden ? "100%" : "0"
        }}
      >
        <div
          className="flex-auto pt4 ph2 fw1 f3 overflow-scroll mb4"
          style={{
            textShadow: "0 0 10px black",
            color: "rgba(255, 255, 255, 0.9)"
          }}
        >
          {this.props.messages.map((message, index) => (
            <div
              key={index}
              className={`mv4 ${message.from === "me" ? "tr" : "tl"}`}
            >
              <div>{message.content}</div>
              {message.offers && (
                <Carousel>
                  {message.offers.map((item, index) => (
                    <Card key={index} item={item} />
                  ))}
                </Carousel>
              )}
            </div>
          ))}
          <div className="tr mv2">
            {this.props.interim.split(" ").map((value, index) => (
              <div
                style={{ display: "inline-block" }}
                key={index}
                className="addMessage nowrap overflow-hidden pr1"
              >
                {value + " "}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
