import { FC, memo } from "react";
import { AreaChart, Area } from "recharts";
import { InfoProps } from "../ReadingInfo/ReadingInfo";

const AreaCharts: FC<InfoProps> = ({ item }) => {
  const data = [
    {
      name: "startReading",
      page: item.startPage,
    },
    {
      name: "stopReading",
      page: item.finishPage,
    },
  ];

  return (
    <AreaChart width={60} height={25} data={data}>
      <Area
        type="monotone"
        dataKey="page"
        fill="rgba(48, 185, 77, 0.2)"
        stroke="#30B94D"
      />
    </AreaChart>
  );
};

export default memo(AreaCharts);
