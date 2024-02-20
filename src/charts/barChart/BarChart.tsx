import ReactECharts from 'echarts-for-react';
const options = {
  title: {
    text:'Bar Chart'
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [340, 413, 690, 250, 210, 110, 560],
      type: 'bar',
    },
  ],
};

export default function BarChart() {
  return (
    <ReactECharts
      option={options}
      style={{ width: '600px', height: '400px' }}
    ></ReactECharts>
  );
}
