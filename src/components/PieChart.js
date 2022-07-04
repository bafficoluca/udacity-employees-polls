import React from "react";
import Paper from "@mui/material/Paper";
import {
  Chart,
  PieSeries,
  Title,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";

export const PieChart = ({ data }) => {
  return (
    <Paper>
      <Chart data={data}>
        <PieSeries valueField="numberOfVotes" argumentField="answer" />
        <Title text="Votes per answer" />
        <Animation />
      </Chart>
    </Paper>
  );
};
