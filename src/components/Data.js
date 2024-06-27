import React, { useState, useEffect, useCallback } from "react";
import ChartComponent from "./ChartComponent";
import jsonData from "../data/data.json"; // Correct path to your JSON file
import "../styles/styles.css";

function Data() {
  const [data, setData] = useState([]);
  const [timeframe, setTimeframe] = useState("daily");

  const filterData = useCallback((timeframe) => {
    let filteredData;
    switch (timeframe) {
      case "daily":
        filteredData = jsonData.jsonData.filter((item, index, arr) => {
          if (index === 0) return true; // Include the first data point
          const prevDate = new Date(arr[index - 1].timestamp);
          const currDate = new Date(item.timestamp);
          const diffDays = Math.floor(
            (currDate - prevDate) / (1000 * 60 * 60 * 24)
          );
          return diffDays === 1;
        });

        break;
      case "weekly":
        filteredData = jsonData.jsonData.filter((item, index, arr) => {
          const date = new Date(item.timestamp);
          const weekStart = new Date(date);
          weekStart.setDate(date.getDate() - date.getDay());
          return (
            index ===
            arr.findIndex(
              (i) =>
                new Date(i.timestamp).toDateString() ===
                weekStart.toDateString()
            )
          );
        });
        break;
      case "monthly":
        filteredData = jsonData.jsonData.filter((item, index, arr) => {
          const date = new Date(item.timestamp);
          const monthStart = new Date(date.getFullYear(), date.getMonth(), 1);
          return (
            index ===
            arr.findIndex(
              (i) =>
                new Date(i.timestamp).toDateString() ===
                monthStart.toDateString()
            )
          );
        });
        break;
      default:
        filteredData = jsonData.jsonData;
    }
    setData(filteredData);
  }, []);

  useEffect(() => {
    setData(jsonData.jsonData); // Update with your actual JSON structure
  }, []);

  useEffect(() => {
    filterData(timeframe);
  }, [timeframe, filterData]);

  return (
    <div className="App">
      <h1 className="heading">Interactive Chart with React.js</h1>
      <div className="button-container">
        <button className="button" onClick={() => setTimeframe("daily")}>
          Daily
        </button>
        <button className="button" onClick={() => setTimeframe("weekly")}>
          Weekly
        </button>
        <button className="button" onClick={() => setTimeframe("monthly")}>
          Monthly
        </button>
      </div>
      <ChartComponent data={data} />
    </div>
  );
}

export default Data;
