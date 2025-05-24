import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Pago Móvil", value: 400 },
  { name: "Transferencias", value: 300 },
  { name: "Zelle", value: 200 },
  { name: "Divisa", value: 100 },
];

const COLORS = ["#34d399", "#60a5fa", "#fbbf24", "#f87171"];

export default function ChartDonut() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((_, i) => (
            <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
