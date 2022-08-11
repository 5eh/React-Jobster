import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import React from 'react'

const BarChartComponent = ({data}) => {
  return (
      <ResponsiveContainer width='100%' height={300}>
          <BarChart data={data} margin={{ top: 50 }}>
              <CartesianGrid strokeDasharray='10 10' />
              <XAxis data='date' />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar datakey='count' fill='#3b82f6' barSize={75} />
          </BarChart>    
      </ResponsiveContainer>
  )
}

export default BarChartComponent