import { FC } from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";

interface CircleChartsProps {
  percentage: number;
}

const CircleCharts: FC<CircleChartsProps> = ({ percentage }) => {
  const data = [
    {
      name: `${percentage}%`,
      uv: percentage,
      fill: "#30B94D",
    },
  ];
  const fakeData = [
    {
      name: "background-color",
      uv: 100,
      fill: "#000000",
    },
  ];

  const style = {
    bottom: -10,
    lineHeight: "24px",
  };
  const greenSectorAngle = (percentage / 100) * 360;
  return (
    <div style={{ position: "relative" }}>
      <RadialBarChart
        width={200}
        height={200}
        cx="50%"
        cy="50%"
        innerRadius="70%"
        outerRadius="90%"
        barSize={15}
        data={fakeData}
        startAngle={90}
        endAngle={450}
      >
        <RadialBar dataKey="uv" background={false} cornerRadius={0} />
      </RadialBarChart>

      <RadialBarChart
        width={200}
        height={200}
        cx="50%"
        cy="50%"
        innerRadius="80%"
        outerRadius="100%"
        barSize={15}
        data={data}
        startAngle={450}
        endAngle={450 - greenSectorAngle}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <RadialBar dataKey="uv" background={false} cornerRadius={5} />
        <Legend iconSize={10} layout="vertical" wrapperStyle={style} />
      </RadialBarChart>
    </div>
  );
};

export default CircleCharts;
