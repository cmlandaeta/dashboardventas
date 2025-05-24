import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Lun", ventas: 400 },
  { name: "Mar", ventas: 300 },
  { name: "Mié", ventas: 500 },
  { name: "Jue", ventas: 700 },
  { name: "Vie", ventas: 600 },
  { name: "Sáb", ventas: 800 },
  { name: "Dom", ventas: 1000 },
];

export default function ChartLine() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="ventas"
          stroke="#6366f1"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
