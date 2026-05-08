import React, { useContext, useMemo } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { TimelineContext } from "../../mainLayout/Root";

const StatsPage = () => {
  const { activities } = useContext(TimelineContext);

  const chartData = useMemo(() => {
    const counts = {
      Call: 0,
      Text: 0,
      Video: 0,
    };

    activities.forEach((activity) => {
      if (counts[activity.type] !== undefined) {
        counts[activity.type]++;
      }
    });

  //   return [
  //     { name: "Text", value: counts.Text, color: "#8b5cf6" }, 
  //     { name: "Call", value: counts.Call, color: "#1a3a30" },
  //     { name: "Video", value: counts.Video, color: "#22c55e" },
  //   ].filter((item) => item.value > 0);
  // }, [activities]);

  return (
    <div className="max-w-7xl mx-auto my-12 px-6">
      <h1 className="text-4xl font-bold text-slate-800 mb-10">
        Friendship Analytics
      </h1>

      <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm min-h-[550px] flex flex-col items-center">
        <div className="w-full mb-8">
          <h3 className="text-[#244D3F] font-semibold text-xl tracking-tight">
            By Interaction Type
          </h3>
        </div>

        <div className="h-[400px] w-full">
          {chartData.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  innerRadius={100}
                  outerRadius={140}
                  paddingAngle={8}
                  dataKey="value"
                  stroke="none"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    borderRadius: "16px",
                    border: "none",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  }}
                />
                <Legend
                  verticalAlign="bottom"
                  iconType="circle"
                  iconSize={12}
                  wrapperStyle={{ paddingTop: "50px" }}
                />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex flex-col items-center justify-center h-full">
              <div className="w-32 h-32 bg-gray-50 rounded-full flex items-center justify-center border-2 border-dashed border-gray-200 mb-6">
                <span className="text-gray-300 text-4xl italic">!</span>
              </div>
              <p className="text-gray-400 text-lg font-medium">
                No activity data to display.
              </p>
              <p className="text-gray-300 text-sm mt-2 font-light">
                Interact with friends to generate analytics.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
