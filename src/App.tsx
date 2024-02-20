import { FC } from 'react';
import BarChart from './charts/barChart/BarChart';
import BubbleChart from './charts/bubbleChart/BubbleChart';
import LineChart from './charts/lineChart/LineChart';
import DoughnutPieChart from './charts/pieChart/DoughnutPieChart';
import PieChart from './charts/pieChart/PieChart';
import RadarChart from './charts/radarChart/RadarChart';
import ScatterChart from './charts/scatterChart/ScatterChart';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <BubbleChart />
      <RadarChart />
      <ScatterChart />
      <DoughnutPieChart />
      <BarChart />
      <LineChart />
      <PieChart />
    </div>
  );
};
