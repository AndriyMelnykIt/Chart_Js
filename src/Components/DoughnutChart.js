import 'chart.js/auto';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';


const data = {
	labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
	datasets: [
		{
			data: [12, 19, 3, 5, 2, 3],
			backgroundColor: [
				'red',
				'blue',
				'yellow',
				'green',
				'purple',
				'orange'
			],
			borderWidth: 3
		}]
}

const DoughnutChart = () => {
	return (
		<div style={{textAlign: 'center', marginBottom: '10px'}}>
			<h1>DoughnutChart</h1>
			<div style={{width: '750px', margin: '0 auto'}}>
				<Doughnut type={'doughnut'} data={data} />
			</div>
		</div>
	);
};

export default DoughnutChart;
