import React from 'react';
import './Chart.css';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
 {name:"Ocak", toplam:1200},
 {name:"Şubat", toplam:2100},
 {name:"Mart", toplam:800},
 {name:"Nisan", toplam:1600},
 {name:"Mayıs", toplam:900},
 {name:"Haziran", toplam:1700}
];

const Chart = () => {
  return (
    <div className='chart'>
      <div className='titleChart'>Geçen 6 ay (Gelir)</div>
      <ResponsiveContainer width="100%" aspect={1.7/1}>
        <AreaChart width={730} height={250} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="toplam" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(26,93%,50%)" stopOpacity={0.8} />
              <stop offset="95%" stopColor="hsl(26,93%,50%)" stopOpacity={0} />
            </linearGradient>
          
          </defs>
          <XAxis dataKey="name" stroke='gray'/>

          <CartesianGrid strokeDasharray="3 3" className='chartGrid'/>
          <Tooltip />
          <Area type="monotone" dataKey="toplam" stroke="hsl(26,93%,50%)" fillOpacity={1} fill="url(#toplam)" />
         
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
