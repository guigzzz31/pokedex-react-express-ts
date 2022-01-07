import { Box, Typography, useMediaQuery } from '@mui/material';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
} from 'recharts';
import { EStats, statMap, Stats } from '../../types/Pokemon';
import { typesMapColor, ETypes } from '../../types/TypesColor';

type GraphProps = {
  stats: Stats,
  type: string
}

export default function GraphGenerator({ stats, type }: GraphProps): JSX.Element {
  const matches = useMediaQuery('(min-width:1100px)');

  const objectArray = Object.entries(stats);
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

  const width = !matches ? 300 : 520
  const height = !matches ? 250 : 480

  const radius = !matches ? 100 : 200
  return (
    <Box
      sx={{
        alignSelf: "center",
        backgroundColor: "#fcf4f6",
        borderRadius: 6,
        boxShadow: "33px 33px 67px #c35d6e, -33px -33px 67px #ff859e;",
      }}
      mr="16px"
    >
      <ResponsiveContainer width={width} height={height}>
        <RadarChart
          outerRadius={radius}
          data={dataFinal}
        >
          <PolarGrid
            fill={type[1] ? typesMapColor[type[1] as ETypes] : "#de435c"}
            stroke={type[1] ? typesMapColor[type[1] as ETypes] : "#de435c"}
          />
          <PolarAngleAxis
            dataKey="stat"
            stroke={type[1] ? typesMapColor[type[1] as ETypes] : "#B92941"}
          />
          <PolarRadiusAxis domain={[0, 160]} stroke={typesMapColor[type[0] as ETypes]} />
          <Radar name="Stats" dataKey="value" stroke={typesMapColor[type[0] as ETypes]} fill={typesMapColor[type[0] as ETypes]} fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </Box>
  );
}

