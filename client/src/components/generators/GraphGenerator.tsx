import { Box, Typography, useMediaQuery } from '@mui/material';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
} from 'recharts';
import { EStats, statMap, Stats } from '../../types/Pokemon';


export default function GraphGenerator(stats: any) {
  const matches = useMediaQuery('(min-width:1100px)');

  const objectArray = Object.entries(stats.stats);
  let dataFinal: object[] = [];
  objectArray.forEach(([key, value]) => {
    let statFinal = {
      key: key,
      stat: statMap[key as EStats],
      value: value,
      fullMark: 10000,
    }
    dataFinal.push(statFinal)
  });

  const width = !matches ? 350 : 520
  const height = !matches ? 250 : 480

  const radius = !matches ? 100 : 200
  return (
    <Box

    >
      {/* <Typography
        sx={{
          color: "#fff",
          fontWeight: 600,
          fontSize: [20, 22, 24, 26, 32],
          textAlign: "center",
          //marginRight: "16px"
        }}
      >
        Stats
      </Typography> */}
      <ResponsiveContainer width={width} height={height}>
        <RadarChart
          outerRadius={radius}
          data={dataFinal}
        // margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <PolarGrid fill='#FFF' stroke="#e1f2fe" />
          <PolarAngleAxis
            dataKey="stat"
            stroke="#FFF"
          //tick={false}

          //tickLine 
          />
          <PolarRadiusAxis domain={[0, 160]} stroke="#CACACA" />
          <Radar name="Stats" dataKey="value" stroke="#B92941" fill="#B92941" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </Box>
  );
}

