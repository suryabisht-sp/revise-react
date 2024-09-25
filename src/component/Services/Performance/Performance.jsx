import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./Performance.css";

const PerformanceChart = () => {
  const [data, setData] = useState([]);
  const [chartType, setChartType] = useState('line');
  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300'];

  // Function to generate random values for simulation
  const generateRandomValue = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  useEffect(() => {
    // Initial data load
    const initialData = [];
    for (let i = 0; i < 5; i++) {
      const time = new Date(Date.now() - (i * 2000)).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
      initialData.unshift({
        time,
        memory: generateRandomValue(30, 70), // Simulated memory usage
        cpu: generateRandomValue(20, 80),    // Simulated CPU usage
        disk: generateRandomValue(10, 90),   // Simulated Disk I/O
        network: generateRandomValue(50, 100), // Simulated Network Traffic
        errors: generateRandomValue(0, 5), // Error rates
        tasks: generateRandomValue(5, 20),  // Pending tasks
        execTime: generateRandomValue(1, 10), // Execution time per task
        latency: generateRandomValue(10, 100), // Latency
      });
    }
    setData(initialData);

    const intervalId = setInterval(() => {
      // Simulate real-time data update
      const newTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
      const newDataPoint = {
        time: newTime,
        memory: generateRandomValue(30, 70),
        cpu: generateRandomValue(20, 80),
        disk: generateRandomValue(10, 90),
        network: generateRandomValue(50, 100),
        errors: generateRandomValue(0, 5),
        tasks: generateRandomValue(5, 20),
        execTime: generateRandomValue(1, 10),
        latency: generateRandomValue(10, 100),
      };

      setData(prevData => [...prevData, newDataPoint]); // Append new data point
    }, 5000); // Update every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  // Function to switch chart type
  const handleChartTypeChange = (type) => {
    setChartType(type);
  };

  const MAX_DATA_POINTS = 10;
  const trimmedData = data.length > MAX_DATA_POINTS ? data.slice(data.length - MAX_DATA_POINTS) : data;

  const latestData = data.length > 0 ? data[data.length - 1] : { memory: 0, cpu: 0 };

  const memoryPieData = [
    { name: 'Used Memory', value: latestData.memory },
    { name: 'Available Memory', value: 100 - latestData.memory }
  ];

  const cpuPieData = [
    { name: 'Used CPU', value: latestData.cpu },
    { name: 'Available CPU', value: 100 - latestData.cpu }
  ];
  return (
    <div className="performance-chart">
      {/* Buttons to switch between charts */}
      <div className="performance-chart-btn">
        <button
          onClick={() => handleChartTypeChange("line")}
          className="toggle-chart-btn"
        >
          Show Line Chart
        </button>
        <button
          onClick={() => handleChartTypeChange("bar")}
          className="toggle-chart-btn"
        >
          Show Bar Chart
        </button>
        <button
          onClick={() => handleChartTypeChange("area")}
          className="toggle-chart-btn"
        >
          Show Area Chart
        </button>
        <button
          onClick={() => handleChartTypeChange("pie")}
          className="toggle-chart-btn"
        >
          Show Pie Chart
        </button>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        {chartType === 'line' && (
          <LineChart data={trimmedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="memory" stroke="#8884d8" />
            <Line type="monotone" dataKey="cpu" stroke="#82ca9d" />
            <Line type="monotone" dataKey="disk" stroke="#ffc658" />
            <Line type="monotone" dataKey="network" stroke="#ff7300" />
          </LineChart>
        )}
        {chartType === 'bar' && (
          <BarChart data={trimmedData}>
            <CartesianGrid strokeDasharray="4 4" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="errors" fill="#8884d8" />
            <Bar dataKey="tasks" fill="#82ca9d" />
            <Bar dataKey="execTime" fill="#ffc658" />
            <Bar dataKey="latency" fill="#ff7300" />
          </BarChart>
        )}
        {chartType === 'area' && (
          <AreaChart data={trimmedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="memory" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="cpu" stroke="#82ca9d" fill="#82ca9d" />
            <Area type="monotone" dataKey="disk" stroke="#ffc658" fill="#ffc658" />
            <Area type="monotone" dataKey="network" stroke="#ff7300" fill="#ff7300" />
          </AreaChart>
        )}
        {chartType === 'pie' && (
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <PieChart width={400} height={400}>
              <Pie data={memoryPieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} fill="#8884d8" label>
                {memoryPieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
            <PieChart width={400} height={400}>
              <Pie data={cpuPieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} fill="#82ca9d" label>
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
      <div>
        <h1>Explanation of Metrics and Charts:</h1>
        <ul>
          <h2>Line/Area Charts show real-time metrics:</h2>
          <li>Memory Usage</li>
          <li>CPU Usage</li>
          <li>Disk I/O</li>
          <li>Network Traffic</li>
        </ul>
        <ul>
          <h2>Bar Chart displays:</h2>
          <li>Error Rates</li>
          <li>Pending Tasks</li>

          <li>Execution Time</li>
          <li>Latency</li>
        </ul>
        <ul>
          <h2>Pie Charts split data:</h2>
          <li>Memory: Used vs. Available.</li>
          <li>CPU: Used vs. Available.</li>
        </ul>
      </div>
    </div>
  );
};

export default PerformanceChart;
