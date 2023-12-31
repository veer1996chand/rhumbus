"use client";
import React, { useRef, useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

export default function LineSeries() {
  useLayoutEffect(() => {
    // Create root and chart
    var root = am5.Root.new("chartdiv");

    root.setThemes([am5themes_Animated.new(root)]);

    var chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panY: false,
        wheelY: "zoomX",
        layout: root.verticalLayout,
      })
    );

    // Define data
    var data = [
      {
        date: new Date(2021, 2, 2).getTime(),
        value: 1800,
      },
      {
        date: new Date(2021, 2, 3).getTime(),
        value: 800,
      },
      {
        date: new Date(2021, 2, 8).getTime(),
        // value is missing
      },
      {
        date: new Date(2021, 2, 13).getTime(),
        value: 1200,
      },
      {
        date: new Date(2021, 2, 15).getTime(),
        value: 1000,
      },
      {
        date: new Date(2021, 2, 16).getTime(),
        value: 740,
      },
    ];

    // Craete Y-axis
    var yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    // Create X-Axis
    var xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        baseInterval: { timeUnit: "day", count: 1 },
        renderer: am5xy.AxisRendererX.new(root, {
          minGridDistance: 20,
        }),
      })
    );

    // Create series
    function createSeries(name: string, field: string) {
      let series = chart.series.push(
        am5xy.SmoothedXLineSeries.new(root, {
          name: "Series",
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "value",
          valueXField: "date",
          tension: 0.2,
          minDistance: 0,
          stroke: am5.color("#775DA6"),
          fill: am5.color("#775DA6"),
        })
      );
      series.strokes.template.setAll({
        strokeWidth: 2,
      });
      series.fills.template.setAll({
        fillOpacity: 0.5,
        visible: true,
      });
      series.data.setAll(data);
    }

    createSeries("Series with breaks", "value");

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div
      className="m-0 p-0"
      id="chartdiv"
      style={{ width: "100%", height: "100%" }}
    ></div>
  );
}
