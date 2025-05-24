import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  ListTodo,
  BarChart,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: <LayoutDashboard /> },
  { label: "Ventas", icon: <BarChart /> },
  { label: "Pedidos", icon: <ShoppingCart /> },
  { label: "Tareas", icon: <ListTodo /> },
  { label: "Usuarios", icon: <Users /> },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="text-xl font-bold p-4 border-b">Mi POS</div>
      <nav className="flex flex-col gap-2 p-4">
        {navItems.map((item) => (
          <button
            key={item.label}
            className="flex items-center gap-2 p-2 rounded hover:bg-gray-200"
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
