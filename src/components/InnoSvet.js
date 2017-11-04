import React, { Component } from 'react'
import Chart from './Chart'
import EmmaActionButton from './EmmaActionButton'

export default class InnoSvet extends Component {
  render() {
    return (
      <div className='flex h-100 w-100 bg-white flex-column' style={{
        transition: 'all .5s ease',
        filter: this.props.isBlurred ? 'blur(50px)' : ''
      }}>
        <div className='bg-dark-gray w-100 flex justify-between items-center pl4 pr3 f7 white' style={{ minHeight: 24 }}>
          <div>
            9:41
            </div>
          <div>
            Innogy
            </div>
        </div>
        <div className='flex justify-between items-center bg-dark-gray white ph2' style={{ minHeight: 50 }}>
          <i className="material-icons">menu</i>
          <div>
            Spotřeba elektřiny
            </div>
          <div>
            <i className="material-icons">help_outline</i>
            <i className="material-icons">mail_outline</i>
          </div>
        </div>
        <div className='flex-auto bg-white overflow-auto pa2'>
          <div className="br-pill w-100 flex bg-dark-pink justify-between items-center white pa2">
            <i className="material-icons">flash_on</i>
            <div className='f6'>
              <div className="b">
                Domov
                </div>
              <div className="fw1">
                Nad Stadionem 23, Praha 4 140 00
                </div>
            </div>
            <i className="material-icons">keyboard_arrow_down</i>
          </div>
          <div className="overflow-hidden white br-pill flex justify-between items-center mt2">
            <div className="w-50 bg-purple pa3">
              Spotřeba (kWh)
              </div>
            <div className="w-50 bg-light-gray pa3 dark-gray">
              Náklady (Kc)
              </div>
          </div>
          <Chart></Chart>
          <div className="relative overflow-hidden dark-pink br-pill flex justify-center items-center mt2 pa2 ba b--dark-pink">
            <div>
              Detail spotřeby
              </div>
            <i className="material-icons absolute right-0 mr3">keyboard_arrow_right</i>
          </div>
          <div className="overflow-hidden relative bg-dark-pink br-pill flex justify-center items-center mt2 pa2 white">
            <div>
              Nahrát nový stav
              </div>
            <i className="material-icons absolute right-0 mr3">cloud_upload</i>
          </div>
        </div>
        <EmmaActionButton />
      </div>
    )
  }
}