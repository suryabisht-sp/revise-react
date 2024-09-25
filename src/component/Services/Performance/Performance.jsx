import React, { useState, useEffect } from 'react';
import {
  LineChart, Line, BarChart, Bar, AreaChart, Area,
  PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

import "./Performance.css"
const PerformanceChart = () => {
  const [data, setData] = useState([]);
  const [chartType, setChartType] = useState('line');
  const COLORS = ['#8884d8', '#82ca9d'];

  // Function to generate random values for simulation
  const generateRandomValue = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  useEffect(() => {
    // Initial data load
    const initialData = [];
    for (let i = 0; i < 5; i++) {
      const time = new Date(Date.now() - (i * 2000)).toLocaleTimeString(); // Create timestamps for initial data
      initialData.unshift({
        time,
        memory: generateRandomValue(30, 70), // Simulated memory usage
        cpu: generateRandomValue(20, 80),    // Simulated CPU usage
      });
    }
    setData(initialData);

    const intervalId = setInterval(() => {
      // Simulate real-time data update
      const newTime = new Date().toLocaleTimeString(); // Current time for x-axis
      const newDataPoint = {
        time: newTime,
        memory: generateRandomValue(30, 70), // Simulate real-time memory usage
        cpu: generateRandomValue(20, 80),    // Simulate real-time CPU usage
      };

      // Update state with new data
      setData(prevData => [...prevData, newDataPoint]); // Append new data point
    }, 2000); // Update every 2 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  // Function to switch chart type
  const handleChartTypeChange = (type) => {
    setChartType(type);
  };
  // Remove the oldest data point when data exceeds a certain length (optional)
  const MAX_DATA_POINTS = 10; // Set the maximum number of data points to display
  const trimmedData = data.length > MAX_DATA_POINTS ? data.slice(data.length - MAX_DATA_POINTS) : data;

  // Get the latest data point for the pie charts
  const latestData = data.length > 0 ? data[data.length - 1] : { memory: 0, cpu: 0 };

  // Pie data for memory and CPU
  const memoryPieData = [
    { name: 'Used Memory', value: latestData.memory },
    { name: 'Available Memory', value: 100 - latestData.memory }
  ];

  const cpuPieData = [
    { name: 'Used CPU', value: latestData.cpu },
    { name: 'Available CPU', value: 100 - latestData.cpu }
  ];
  return (
    <div className='performance-chart'>
      {/* Buttons to switch between charts */}
      <button onClick={() => handleChartTypeChange('line')} className="toggle-chart-btn">
        Show Line Chart
      </button>
      <button onClick={() => handleChartTypeChange('bar')} className="toggle-chart-btn">
        Show Bar Chart
      </button>
      <button onClick={() => handleChartTypeChange('area')} className="toggle-chart-btn">
        Show Area Chart
      </button>
      <button onClick={() => handleChartTypeChange('pie')} className="toggle-chart-btn">
        Show Pie Chart
      </button>

      <ResponsiveContainer width="100%" height={400}>
        {chartType === 'line' && (
          // LineChart
          <LineChart data={trimmedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="memory" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="cpu" stroke="#82ca9d" />
          </LineChart>
        )}
        {chartType === 'bar' && (
          // BarChart
          <BarChart data={trimmedData}>
            <CartesianGrid strokeDasharray="4 4" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="memory" fill="#8884d8" />
            <Bar dataKey="cpu" fill="#82ca9d" />
          </BarChart>
        )}
        {chartType === 'area' && (
          // AreaChart
          <AreaChart data={trimmedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="memory" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="cpu" stroke="#82ca9d" fill="#82ca9d" />
          </AreaChart>
        )}
           {chartType === 'pie' && (
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            {/* Pie chart for memory usage */}
            <PieChart width={400} height={400}>
              <Pie
                data={memoryPieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                fill="#8884d8"
                label
              >
                {memoryPieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>

            {/* Pie chart for CPU usage */}
            <PieChart width={400} height={400}>
              <Pie
                data={cpuPieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                fill="#82ca9d"
                label
              >
                {cpuPieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        )}
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
