import ReactECharts from 'echarts-for-react';

const options = {
  title: {
    text: 'Type Of animals And Number Of Animals In The Zoo',
    subtext: 'Data from: Info Origin 2024',
  },
  tooltip: {
    trigger: 'item',
  },
  xAxis: {
    type: 'category',
    data: ['Zebra', 'Lions', 'Monkeys', 'Elephants', 'Ostriches'],
  },
  yAxis: {},
  series: [
    {
      type: 'scatter',
      symbolSize: 20,
      data: [
        ['Zebra', 40],
        ['Lions', 5],
        ['Monkeys', 50],
        ['Elephants', 10],
        ['Ostriches', 20],
      ],
    },
  ],
};
export default function ScatterChart() {
  return <ReactECharts option={options}></ReactECharts>;
}
