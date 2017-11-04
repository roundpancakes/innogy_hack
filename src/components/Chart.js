import React, {Component} from 'react'
import {Line, LineChart, ResponsiveContainer, XAxis, CartesianGrid} from 'recharts'

const data = [
  {name: '1', uv: 3000, pv: 3000},
  {name: '2', uv: 3000, pv: 3000},
  {name: '3', uv: 3200, pv: 3200},
  {name: '4', uv: 3100, pv: 3100},
  {name: '5', uv: 3230, pv: 3230},
  {name: '6', uv: 3200, pv: 2400},
  {name: '7', uv: 3280, pv: 2350},
  {name: '8', uv: 3450, pv: 2350},
  {name: '9', uv: 3400, pv: 2200},
  {name: '10', uv: 3600, pv: 2200},
  {name: '11', uv: 3500, pv: 2100}
];

export default class Chart extends Component {
    render () {
      return (
        <div>
          <span className="b purple ma1">-</span><span className="f7">Aktuální období (4.5.2017 - 3.11.2018)</span>
          <ResponsiveContainer width={"100%"} height={200}>
        <LineChart data={data}>
            <Line type="natural" dataKey="uv" stroke="#8884d8" dot={false}/>
            <Line type="natural" dataKey="pv" stroke="#000" dot={false}/>
            <XAxis dataKey="name" />
            <CartesianGrid vertical={false}/>
        </LineChart>
        </ResponsiveContainer>
        </div>
      )
    }
  }