import ReactECharts from 'echarts-for-react';

const options = {
  title: {
    text: 'Ingredients Used To Prepare A Butter Cake',
    subtext: 'By InfoOrigin',
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
  },
  series: [
    {
      name: 'Butter Cake Contains',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 30, name: 'Flour' },
        { value: 20, name: 'Sugar' },
        { value: 40, name: 'Egg' },
        { value: 10, name: 'Butter' },
      ],
    },
  ],
  emphasis: {
    itemStyle: {
      shadiwBlur: 10,
      shadowOffsetX: 0,
      shadowColor: 'rgba(0,0,0,0.5)',
    },
  },
  legend: {
    orient: 'vertical',
    left: 'right',
  },
};

export default function PieChart() {
  return <ReactECharts option={options}></ReactECharts>;
}
