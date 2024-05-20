"use client";
import React, { useState } from "react";
import EllipticCurveGraph from "../components/EllipticCurveGraph";

const generateEllipticCurvePoints = (a, b, range) => {
	const points = [];
	for (let x = -range; x <= range; x += 0.1) {
		const ySquared = x * x * x + a * x + b;
		if (ySquared >= 0) {
			const y = Math.sqrt(ySquared);
			points.push({ x, y });
			if (y !== 0) points.push({ x, y: -y });
		}
	}
	return points;
};

const Home = () => {
	const [a, setA] = useState(-1);
	const [b, setB] = useState(1);
	const [range, setRange] = useState(5);

	const dataPoints = generateEllipticCurvePoints(a, b, range);

	return (
		<div>
			<h1>Elliptik Egri Chiziqlar</h1>
			<div>
				<label>
					Parameter a:
					<input
						type="number"
						value={a}
						onChange={(e) => setA(parseFloat(e.target.value))}
					/>
				</label>
				<br />
				<label>
					Parameter b:
					<input
						type="number"
						value={b}
						onChange={(e) => setB(parseFloat(e.target.value))}
					/>
				</label>
				<br />
				<label>
					Range:
					<input
						type="number"
						value={range}
						onChange={(e) => setRange(parseFloat(e.target.value))}
					/>
				</label>
			</div>
			<EllipticCurveGraph dataPoints={dataPoints} />
		</div>
	);
};

export default Home;
