import React from "react";
import Chart from 'chart.js/auto'
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(CategoryScale);

function GetMonthsLabel(count)
{
  let result = [];
  let myCurrentDate = new Date()
  let year = myCurrentDate.getFullYear();
  for (let i = 0; i < count; i++)
  {
    result.push(year - i);
  }
  return result.reverse();
}

function PriceChart(props){
  const lineChartData = {
    labels: GetMonthsLabel(props.prices.length),
    datasets: [
      {
        data: props.prices.reverse(),
        label: "Стоимость",
        borderColor: "#3333ff",
        fill: false,
        lineTension: 0.5
      }
    ]
  };

  return (
    <Line
      type="line"
      width={125}
      height={40}
      options={{
        title:{
          display: false
        },
        plugins: {
          legend: false,
        },
        scales: {
          x: {
            grid:{
              display: false
            }
          },
          y: {
            gridLines: {
              drawBorder: false,
            },
            display: false
          }
        }
      }}
      data={lineChartData}
    />
  );
};
export default PriceChart;