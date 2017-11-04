import React, {Component} from 'react'
import phoneBody from '../assets/Body.png'
import InnoSvet from './InnoSvet'
import Emma from './Emma'
import EmmaActionButton from './EmmaActionButton'

export default class Mobile extends Component {
  state = {
    emmaIsHidden: true
  }

  render() {
    return (
      <div
        className="flex items-center justify-center vh-100"
        style={{ background: "url('https://i.imgur.com/AMf9X7E.jpg')" }}
        onClick={() => this.setState({emmaIsHidden: false})}
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
            pointerEvents: "none",
            zIndex: 999
          }}
        />
        <div
          style={{
            width: 312,
            height: 671,
            borderRadius: 32,
            overflow: "hidden",
            position: 'relative',
            background: 'black'
          }}
        >
          <InnoSvet isBlurred={!this.state.emmaIsHidden}/>
          <Emma isHidden={this.state.emmaIsHidden} />
          <EmmaActionButton />
        </div>
      </div>
    );
  }
}
