# Interactive Chart with React.js

## Overview

This project is an interactive chart application built with React.js. It allows users to visualize data with support for different timeframes (daily, weekly, and monthly). The data is displayed using the Recharts library.

## Features

- Interactive chart with zoom and click events
- Timeframe selection (daily, weekly, monthly)
- Responsive design

## Project Structure

## Getting Started

### Prerequisites

Ensure you have Node.js and npm installed on your machine. You can download them from [here](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/my-chart-app.git
   cd my-chart-app
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

   The application should open automatically in your default browser at `http://localhost:3000`.

## Usage

### Timeframe Selection

The application allows you to select different timeframes for viewing the data. You can choose between daily, weekly, and monthly views by clicking the respective buttons.

### Chart Interaction

The chart is interactive. You can hover over data points to see their values.

## File Descriptions

- `ChartComponent.js`: This component renders the chart using the Recharts library.
- `Data.js`: This component fetches the data, handles timeframe selection, and passes the filtered data to `ChartComponent`.
- `TimeframeSelector.js`: This component renders the buttons for selecting the timeframe.
- `data/data.json`: This file contains the sample data in JSON format.
- `App.js`: The main application component that integrates all other components.

## Data Format

The data is stored in `data/data.json` in the following format:

```json
{
  "jsonData": [
    { "timestamp": "2023-01-01T00:00:00Z", "value": 10 },
    { "timestamp": "2023-01-02T00:00:00Z", "value": 12 },
    { "timestamp": "2023-01-03T00:00:00Z", "value": 15 },
    { "timestamp": "2023-01-04T00:00:00Z", "value": 10 },
    { "timestamp": "2023-01-08T00:00:00Z", "value": 60 },
    { "timestamp": "2023-01-15T00:00:00Z", "value": 55 },
    { "timestamp": "2023-02-01T00:00:00Z", "value": 10 },
    { "timestamp": "2023-02-01T00:00:00Z", "value": 70 },
    { "timestamp": "2023-03-01T00:00:00Z", "value": 90 }
  ]
}
```
