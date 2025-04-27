import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import style from  "./Chart.module.scss"
export const Chart = ({ budgets, budgetTotal }) => {

  console.log(budgets)
  const [state, setState] = useState({
    series:budgets.map((m)=> m.maximum),
    options: {
      chart: {
        type: "donut",
      },
      labels: budgets.map((c) => c.category),
      colors:budgets.map((c)=> c.theme),
      responsive: [
        {
          breakpoint: 580,
          options: {
            chart: {
              width: 440,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <div>
      <div className={style.diagramma} id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="donut"
          width={440}
        />
  <div className={style.p}>
    <h3>$338</h3>
    <p>of ${budgetTotal} limit</p>
  </div>
      </div>
      <div id="html-dist">       
      </div>
    </div>
  );
};
