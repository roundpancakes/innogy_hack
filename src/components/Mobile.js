import React, {Component} from 'react'
import phoneBody from '../assets/Body.png'
import Chart from './Chart.js'

export default class Mobile extends Component {
  render () {
    return (
      <div className='flex items-center justify-center vh-100' style={{background: "url('https://i.imgur.com/AMf9X7E.jpg')"}}>
        <div style={{
          backgroundImage: `url('${phoneBody}')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: 360,
          height: 715,
          position: 'absolute'
        }}></div>
        <div style={{
          width: 312,
          height: 671,
          background: 'green',
          borderRadius: 32,
          overflow: 'hidden'
        }}>
          <div className='h-100 w-100 bg-red'>
          <Chart></Chart>
          </div>
        </div>
      </div>
    )
  }
}