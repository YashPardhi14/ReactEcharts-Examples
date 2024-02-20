import ReactECharts from 'echarts-for-react';

import { data } from './data';

const options = {
  title: {
    text: 'Life Expectancy and GDP by Country',
    left: '5%',
    top: '1%',
    bottom: '5%',
  },
  tooltip: {
    type: 'item',
  },
  legend: {
    right: '10%',
    top: '1%',
    data: ['1990', '2015'],
  },
  grid: {
    left: '8%',
    top: '10%',
  },
  xAxis: {
    splitLine: {
      lineStyle: {
        type: 'dashed',
      },
    },
  },
  yAxis: {
    splitLine: {
      lineStyle: {
        type: 'dashed',
      },
    },
    scale: true,
  },
  series: [
    {
      name: '1990',
      data: data[0],
      type: 'scatter',
      symbolSize: function (data: any) {
        return Math.sqrt(data[2]) / 5e2;
      },
      emphasis: {
        focus: 'series',
        label: {
          show: true,
          formatter: function (param: any) {
            return param.data[3];
          },
          position: 'top',
        },
      },
      itemStyle: {
        shadowBlur: 10,
        shadowColor: 'rgba(120, 36, 50, 0.5)',
        shadowOffsetY: 5,
      },
    },
    {
      name: '2015',
      data: data[1],
      type: 'scatter',
      symbolSize: function (data: any) {
        return Math.sqrt(data[2]) / 5e2;
      },
      emphasis: {
        focus: 'series',
        label: {
          show: true,
          formatter: function (param: any) {
            return param.data[3];
          },
          position: 'top',
        },
      },
      itemStyle: {
        shadowBlur: 10,
        shadowColor: 'rgba(25, 100, 150, 0.5)',
        shadowOffsetY: 5,
      },
    },
  ],
};
export default function BubbleChart() {
  return <ReactECharts option={options}></ReactECharts>;
}
