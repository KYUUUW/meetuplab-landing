'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register ChartJS components using ChartJS.register
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

export default function PriceChart(props: {
  timeList: Date[];
  dataList: number[];
}) {
  console.log(props.timeList);
  return (
    <div>
      <Line
        data={{
          labels: props.timeList.map((time) => time.toString()),
          datasets: [
            {
              data: props.dataList,
              backgroundColor: 'purple',
            },
          ],
        }}
      />
    </div>
  );
}
