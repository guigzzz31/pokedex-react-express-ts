import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';


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
    <RadarChart cx={250} cy={250} outerRadius={150} width={500} height={500} data={dataFinal}>
      <PolarGrid />
      <PolarAngleAxis dataKey="stat" />
      <PolarRadiusAxis domain={[0, 160]} />
      <Radar name="Stats" dataKey="value" stroke="#DD2D4A" fill="#DD2D4A" fillOpacity={0.6} />
    </RadarChart>
  );
}

