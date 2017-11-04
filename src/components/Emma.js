import React, { Component } from "react";
import botStore from '../stores/botStore'
import {nextBotState} from '../actions/botAction'
import './App.css'

let voice

window.speechSynthesis.onvoiceschanged = function() {
  voice = window.speechSynthesis.getVoices()[10];
};


export default class Emma extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      interim: ""
    };
    this.init_speech();
  }

  componentWillMount() {
    botStore.addChangeListener(this.handleStoreChange)
    this.handleStoreChange()
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isHidden && !nextProps.isHidden) {
      nextBotState()
    }
  }

  componentWillUnmount() {
    botStore.removeChangeListener(this.handleStoreChange)
  }

  handleStoreChange = () => {
    const newMessages = this.state.messages
    const newMessage = botStore.getState().text
    newMessages.push(newMessage)
    this.setState(newMessages)
    this.say(newMessage)
  }

  render() {
    return (
      <div
        className="flex h-100 w-100 flex-column absolute bg-black-40"
        style={{
          transition: "all .5s ease",
          top: this.props.isHidden ? "100%" : "0",
        }}
      >
        <div className="flex-auto mt4 ph2 fw1 f3" style={{textShadow: '0 0 10px black', color: 'rgba(255, 255, 255, 0.9)'}}>
          {this.state.messages.map((message, index) => (
            <div key={index} className={`mv2 ${message.from === 'me' ? 'tr' : 'tl'}`}>
              {message.content}
            </div>
          ))}
          <div className="tr mv2">
            {this.state.interim.split(' ').map((value, index) => (
              <div style={{display: 'inline-block'}} key={index} className="addMessage nowrap overflow-hidden pr1">
                {value + ' '}
              </div>
            ))}
          </div>
        </div>
        <div
          className="bg-green w-100"
          onClick={() => this.recognition.start()}
          style={{ minHeight: 80 }}
        />
      </div>
    );
  }
  init_speech = () => {
    this.recognition = new window.webkitSpeechRecognition();

    if (!("webkitSpeechRecognition" in window)) {
      console.log("Browser not supported");
    }

    this.recognition.continuous = false;
    this.recognition.interimResults = true;
    this.recognition.onstart = () => {}

    this.recognition.onend = (result) => {
      const newMessages = this.state.messages
      newMessages.push({
        content: this.state.interim,
        from: 'me'
      })
      nextBotState(this.state.interim);
      this.setState({
        message: this.state.newMessages,
        interim: ""
      })
    };

    this.recognition.onresult = event => {
      let interim_transcript = "";
      for (let i = 0; i < event.results.length; i++) {
        interim_transcript += cap(event.results[i][0].transcript);
      }
      this.setState({
        interim: interim_transcript
      });
    };

    const cap = string => {
      const s = string.charAt(0).toUpperCase() + string.slice(1);
      const last = s.charAt(s.length - 1);
      return last === "?" || last === "." ? s : s + ".";
    };
  };

  say = (message) => {
      var msg = new SpeechSynthesisUtterance();
      msg.text = message
      msg.voice = voice
      window.speechSynthesis.speak(msg);

  }
}
