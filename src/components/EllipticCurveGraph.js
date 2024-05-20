import React from "react";
import { Scatter } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	Tooltip,
	Legend,
} from "chart.js";
ChartJS.register(CategoryScale, LinearScale, PointElement, Tooltip, Legend);
const EllipticCurveGraph = ({ dataPoints }) => {
	const data = {
		datasets: [
			{
				label: "Elliptic Curve Points",
				data: dataPoints,
				backgroundColor: "rgba(75, 192, 192, 0.6)",
			},
		],
	};
	const options = {
		scales: {
			x: {
				type: "linear",
				position: "bottom",
			},
			y: {
				type: "linear",
			},
		},
	};

	return <Scatter data={data} options={options} />;
};
export default EllipticCurveGraph;
