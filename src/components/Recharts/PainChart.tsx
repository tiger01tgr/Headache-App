import React from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

interface Props {
  data: any[] | undefined;
  mt?: number;
  mb?: number;
  mr?: number;
  ml?: number;
}

/*
accepts a Pain[]
const data = formatPainGraphData(session.session.pain, 5); to format first before passing in Prop
*/
// PainChart that is rendered
const PainChart: React.FC<Props> = ({ data, mt, mb, mr, ml }) => {
  return (
    <AreaChart
      width={300}
      height={250}
      data={data}
      margin={{ top: mt, right: mr, left: ml, bottom: mb }}
    >
      <defs>
        <linearGradient id="colorPain" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="name" />
      <YAxis domain={[1, 10]} />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="pain"
        stroke="#8884d8"
        fillOpacity={1}
        fill="url(#colorUv)"
      />
    </AreaChart>
  );
};

export default PainChart;
