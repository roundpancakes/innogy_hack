import React, { Component } from 'react'


export default class EmmaActionButton extends Component {

    constructor(props) {
        super(props)

        this.state = {
            percent: 0.0,
            top: true,
            recognizing: false,
        }
    }

    render() {
        return (
            <div
                className={`absolute bottom-0 left-0 right-0 flex w-100 flex-column items-center justify-center`}
                style={{
                    transition: 'height 0.5s ease',
                    height: 200,
                }}
            >

                <div
                    onClick={this.startButton}
                    className='br-pill flex items-center justify-center pointer shadow-1 fadeInUp'
                    style={{
                        width: 100,
                        height: 100,
                        background: 'linear-gradient(135deg, yellow 0%,green 100%)',
                        boxShadow: '0 19px 60px rgba(0, 0, 0, 0.3), 0 15px 20px rgba(0, 0, 0, 0.22)',
                        transition: 'height 0.3s ease, width 0.3s ease, box-shadow 0.5s ease',
                        pointerEvents: 'all',
                    }}
                >
                    <div className='br-pill pulsate'
                        style={{
                            width: 100,
                            height: 100,
                            backgroundColor: '#D7FFF1',
                            transition: 'width 1s ease, height 1s ease, opacity 1s ease',
                            opacity: 0.3,
                        }}
                    >
                    </div>
                    <div className='absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center white f1'>
                        <i className="material-icons">mic</i>
                    </div>
                </div>
            </div>)
    }
}