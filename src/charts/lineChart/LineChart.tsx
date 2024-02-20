import RecatECharts from 'echarts-for-react';

const options = {
  title: {
    text: 'Line Graph Example',
  },
  tooltip: {
    axis: 'trigger',
  },
  xAxis: {
    type: 'category',
    data: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: 'Number of cycles sold',
      data: [50, 35, 78, 15, 80, 45, 10, 60, 31, 26, 48, 18],
      type: 'line',
    },
  ],
};

export default function LineChart() {
  return (
    <RecatECharts
      option={options}
      style={{ width: '500px', height: '500px' }}
    ></RecatECharts>
  );
}
