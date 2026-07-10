import {
  FunnelChart,
  Funnel,
  Tooltip,
  LabelList,
  ResponsiveContainer,
} from "recharts";

const HiringFunnelChart = ({
  data,
}) => {

  return (
    <ResponsiveContainer
      width="100%"
      height={400}
    >
      <FunnelChart>

        <Tooltip />

        <Funnel
          dataKey="count"
          data={data}
        >
          <LabelList
            position="right"
            fill="#000"
            dataKey="stage"
          />
        </Funnel>

      </FunnelChart>
    </ResponsiveContainer>
  );
};

export default HiringFunnelChart;