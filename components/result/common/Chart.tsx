import React from 'react';
import { Bar } from 'react-chartjs-2';

interface Props {
  titles: TopTitleType[];
}

const Chart: React.FC<Props> = ({ titles }) => {
  const names = titles.map((title) => title.name);
  const counts = titles.map((title) => title.count);

  const data = {
    labels: titles && names,
    datasets: [
      // count
      {
        label: '건수',
        data: titles && counts,
        lineTension: 1,
        backgroundColor: 'rgba(242, 184, 113, 0.1)',
        borderWidth: 2,
        borderColor: '#f2b471',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: names,
            fontFamily: 'Montserrat',
            fontColor: 'black',
          },
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: '건수',
            fontFamily: 'Montserrat',
            fontColor: 'black',
          },
          ticks: {
            beginAtZero: true,
            stepSize: 1,
            min: 0,
            max: 100,
            callback: function (value: number) {
              return value + '%';
            },
          },
        },
      ],
    },
  };

  return <Bar type="bar" data={data} options={options} />;
};

export default Chart;
