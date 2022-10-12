import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DataChart from '../DataChart/DataChart'

const Statistics = () => {
    const data = useLoaderData();
    // console.log(data.data)
    return (
        <div>


            <h1>Statistics Area</h1>
            <DataChart
                key={data.data.id}
                data={data.data}
            ></DataChart>
        </div>
    );
};

export default Statistics;