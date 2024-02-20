import ReactECharts from 'echarts-for-react';

const options = {
  title: {
    text: 'Developers Rating',
    left: 'left',
    top: '1px',
  },
  tooltip: {
    type: 'item',
  },
  legend: {
    data: ['Jon snow', 'Daenerys Targaryen'],
    left: 'right',
  },
  radar: {
    indicator: [
      { name: 'Java' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'Angular' },
      { name: 'React' },
      { name: 'Vue' },
    ],
  },
  series: [
    {
      type: 'radar',
      data: [
        { value: [7, 4, 6, 3, 8, 9], name: 'Jon snow' },
        { value: [5, 6, 8, 4, 9, 3], name: 'Daenerys Targaryen' },
      ],
    },
  ],
};
export default function RadarChart() {
  return <ReactECharts option={options}></ReactECharts>;
}
