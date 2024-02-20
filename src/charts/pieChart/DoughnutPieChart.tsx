import ReactECharts from 'echarts-for-react';
const options = {
  title: {
    text: 'Ingredients Used To Prepare A Butter Cake',
    subtext: 'By InfoOrigin',
    left: 'left',
  },
  tooltip:{
trigger:'item'
  },
  legend: {
    top: '10%',
    left: 'right',
  },
  series: [
    {
      name: 'Butter Cake Contains',
      type: 'pie',
      radius: ['20%', '50%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center',
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 30,
          fontWeight: 'bold',
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 30, name: 'Flour' },
        { value: 20, name: 'Sugar' },
        { value: 40, name: 'Egg' },
        { value: 10, name: 'Butter' },
      ],
    },
  ],
};
export default function DoughnutPieChart() {
  return <ReactECharts option={options}></ReactECharts>;
}
