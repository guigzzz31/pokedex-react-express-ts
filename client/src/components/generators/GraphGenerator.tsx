import { Box, useMediaQuery } from '@mui/material';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
} from 'recharts';
import { Stats } from '../../types/Pokemon';


export default function GraphGenerator(stats: any) {
  const matches = useMediaQuery('(min-width:1100px)');

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

  const size = !matches ? 350 : 500
  const radius = !matches ? 100 : 200
  console.log("matches", size, radius)
  return (
    <ResponsiveContainer width={size} height={size}>
      <RadarChart
        outerRadius={radius}
        data={dataFinal}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="stat" />
        <PolarRadiusAxis domain={[0, 180]} />
        <Radar name="Stats" dataKey="value" stroke="#B92941" fill="#B92941" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

