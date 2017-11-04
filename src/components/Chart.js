import React, {Component} from 'react'
import {Line, LineChart, ResponsiveContainer} from 'recharts'

const data = [
  {name: '11', uv: 3000, pv: 2400, amt: 3000},
  {name: '12', uv: 3000, pv: 1398, amt: 2210},
  {name: '1', uv: 2000, pv: 9800, amt: 2290},
  {name: '2', uv: 2780, pv: 3908, amt: 3000},
  

];

export default class Chart extends Component {
    render () {
      return (
          <ResponsiveContainer width={"100%"} height={80}>
        <LineChart data={data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        </LineChart>
        </ResponsiveContainer>
      )
    }
  }