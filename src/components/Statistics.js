import React from "react";
import { useLoaderData } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, Tooltip} from 'recharts';

const Statistics = () => {
  const datas = useLoaderData();
  const newData = datas.data;
  // console.log(newData);
  return (
    <div>
      <h2 className="text-3xl font-bold text-orange-600 my-6">This is the Statistics</h2>
      <LineChart width={500} height={400} data={newData} className="mx-auto">
      <Line type="monotone" dataKey="total" stroke="orange" />
      <XAxis dataKey="name" />
          <YAxis dataKey="total"/>
          <Tooltip></Tooltip>
      </LineChart>
    </div>
  );
};

export default Statistics;
