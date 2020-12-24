import React, { PureComponent } from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

const data = [
  {
    subject: 'attack', A: 49, fullMark: 150,
  },
  {
    subject: 'defense', A: 49, fullMark: 150,
  },
  {
    subject: 'speed', A: 45, fullMark: 150,
  },
  {
    subject: 'spdefense', A: 65, fullMark: 150,
  },
  {
    subject: 'spattack', A: 65, fullMark: 150,
  },
  {
    subject: 'hp', A: 45, fullMark: 150,
  },
];


export default function GraphGenerator(stats: any) {
  const objectArray = Object.entries(stats.stats);
  let dataFinal: object[] = [];
  objectArray.forEach(([key, value]) => {
    let statFinal = {
      key: key,
      stat: key,
      value: value,
      fullMark: 10000,
    }
    dataFinal.push(statFinal)
  });
  return (
    <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={dataFinal}>
      <PolarGrid />
      <PolarAngleAxis dataKey="stat" />
      <PolarRadiusAxis domain={[0, 160]} />
      <Radar name="Stats" dataKey="value" stroke="#DD2D4A" fill="#DD2D4A" fillOpacity={0.6} />
    </RadarChart>
  );
}

