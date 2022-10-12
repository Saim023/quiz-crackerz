import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './DataChart.css';

const DataChart = ({ data }) => {
    // const totalData = data.total;
    const [total] = data;
    console.log(total.total)
    return (
        <div>
            <h1>DataChart</h1>

            <LineChart className='data-chart' width={700} height={400} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey={total.total} stroke="#82ca9d" />
            </LineChart>
        </div>
    );
};

export default DataChart;