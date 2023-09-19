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

export default function PriceChart(props: any) {
  return (
    <div>
      <Line
        data={{
          labels: props.TimeList,
          datasets: [
            {
              data: [100, 120, 115, 134, 168, 132, 200],
              backgroundColor: 'purple',
            },
          ],
        }}
      />
    </div>
  );
}
