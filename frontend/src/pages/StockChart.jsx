import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import ReactApexChart from "react-apexcharts";

const timeSeries = [
  {
    keyward: "DIGITAL_CURRENCY_DIARY",
    key: "Time Series (Daily)",
    lable: "1 Day",
    value: 1,
  },
  {
    keyward: "DIGITAL_CURRENCY_WEEKLY",
    key: "weekly Time Series",
    lable: "1 Week",
    value: 7,
  },
  {
    keyward: "DIGITAL_CURRENCY_MONTHLY",
    key: "Monthly Time Series",
    lable: "1 Month",
    value: 30,
  },
];

function StockChart() {
  const [activeLabel, setActiveLabel] = useState("1 Day");
  const series = [
    {
      data: [
        [1767052800000, 87154.6824060476],
        [1767139200000, 88363.7222363393],
        [1767225600000, 87575.0461596822],
        [1767312000000, 88764.1262407513],
        [1767398400000, 89978.9192036161],
        [1767484800000, 90614.4068438191],
        [1767571200000, 91879.5772256957],
        [1767657600000, 93879.9479734475],
        [1767744000000, 93649.6319764084],
        [1767830400000, 91286.0331439769],
        [1767916800000, 91027.6661698369],
        [1768003200000, 90551.7136317427],
        [1768089600000, 90420.2979517077],
        [1768176000000, 90856.5591015223],
        [1768262400000, 91200.627615117],
        [1768348800000, 95429.1573224277],
        [1768435200000, 96898.7607108196],
        [1768521600000, 95593.3078368079],
        [1768608000000, 95523.1861982478],
        [1768694400000, 94802.8817043164],
        [1768780800000, 93344.2194849136],
        [1768867200000, 92566.0127795226],
        [1768953600000, 88416.886861869],
        [1769040000000, 89453.9047371954],
        [1769126400000, 89483.6516301493],
        [1769212800000, 89524.8486406202],
        [1769299200000, 89149.9597092988],
        [1769385600000, 86625.3312814038],
        [1769472000000, 88249.9014182705],
        [1769558400000, 89141.6503597939],
        [1769644800000, 89212.2082418318],
        [1769731200000, 84630.4206673844],
        [1769817600000, 84091.6301768291],
        [1769904000000, 78647.027397904],
        [1769990400000, 76895.5866559308],
      ],
    },
  ];

  const options = {
    chart: {
      id: "area-datetime",
      type: "area",
      height: 400,
      zoom: {
        autoSacleYaxis: true,
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        type: "datetime",
        tickAmount: 6,
      },
      colors: ["#758AA2"],
      markers: {
        colors: ["#fff"],
        strokeColor: "#fff",
        size: 0,
        strokeWidth: 1,
        strokeDashArray: 0,
        fillOpacity: 1,
        style: "hallow",
      },
      tooltip: {
        theme: "dark",
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100],
        },
      },
    },
    grid: {
      BorderColor: "#47535E",
      strokeDashArray: 4,
      show: true,
    },
  };

  const handleActiveLable = (value) => {
    setActiveLabel(value);
  };

  return (
    <div className="">
      <div className="space-x-3">
        {timeSeries.map((item, index) => (
          <Button
            variant={activeLabel == item.lable ? "" : "outline"}
            onClick={() => handleActiveLable(item.lable)}
            key={index}
          >
            {item.lable}
          </Button>
        ))}
      </div>
      <div id="chart-timelines">
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={450}
        />
      </div>
    </div>
  );
}

export default StockChart;
