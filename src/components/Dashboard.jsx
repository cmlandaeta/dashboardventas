// components/Dashboard.jsx
import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Doughnut, Bar } from "react-chartjs-2";
import {
  ShoppingCartIcon,
  HomeIcon,
  ClipboardListIcon,
  CheckCircleIcon,
  UsersIcon,
  BellIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  SunIcon,
  MoonIcon,
  CurrencyDollarIcon,
  ShoppingBagIcon,
  UserAddIcon,
  CreditCardIcon,
} from "@heroicons/react/outline";
import { motion } from "framer-motion";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = ({ darkMode, setDarkMode }) => {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Datos ficticios
  const salesData = {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
    datasets: [
      {
        label: "Ventas 2023",
        data: [12000, 19000, 15000, 20000, 18000, 22000],
        borderColor: "#3B82F6",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        tension: 0.3,
      },
    ],
  };

  const weeklyIncomeData = {
    labels: ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"],
    datasets: [
      {
        label: "Ingresos ($)",
        data: [3500, 4200, 3800, 5100, 4900, 6200, 5800],
        backgroundColor: "rgba(16, 185, 129, 0.2)",
        borderColor: "#10B981",
        borderWidth: 2,
      },
    ],
  };

  const bestProductsData = {
    labels: [
      "Producto A",
      "Producto B",
      "Producto C",
      "Producto D",
      "Producto E",
    ],
    datasets: [
      {
        data: [35, 25, 20, 15, 5],
        backgroundColor: [
          "#3B82F6",
          "#10B981",
          "#F59E0B",
          "#EF4444",
          "#8B5CF6",
        ],
      },
    ],
  };

  const channelData = {
    labels: ["WhatsApp", "Email", "Llamadas", "Redes Sociales"],
    datasets: [
      {
        data: [45, 30, 15, 10],
        backgroundColor: ["#25D366", "#EA4335", "#4285F4", "#1877F2"],
      },
    ],
  };

  const paymentMethodsData = {
    labels: ["Pago Móvil", "Transferencia", "Zelle", "Divisas", "Efectivo"],
    datasets: [
      {
        data: [40, 25, 15, 15, 5],
        backgroundColor: [
          "#3B82F6",
          "#10B981",
          "#F59E0B",
          "#EF4444",
          "#8B5CF6",
        ],
      },
    ],
  };

  const weeklyProgressData = {
    labels: ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"],
    datasets: [
      {
        label: "Progreso",
        data: [65, 59, 80, 81, 56, 72, 90],
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        borderColor: "#3B82F6",
        borderWidth: 2,
      },
    ],
  };

  const recentOrders = [
    {
      id: "#ORD-001",
      customer: "Cliente A",
      amount: "$120",
      status: "Entregado",
      delivery: "Hoy",
    },
    {
      id: "#ORD-002",
      customer: "Cliente B",
      amount: "$85",
      status: "En curso",
      delivery: "Mañana",
    },
    {
      id: "#ORD-003",
      customer: "Cliente C",
      amount: "$210",
      status: "Pendiente",
      delivery: "2 días",
    },
    {
      id: "#ORD-004",
      customer: "Cliente D",
      amount: "$150",
      status: "Entregado",
      delivery: "Ayer",
    },
    {
      id: "#ORD-005",
      customer: "Cliente E",
      amount: "$95",
      status: "En curso",
      delivery: "Mañana",
    },
  ];

  const alerts = [
    { product: "Producto X", stock: 3, critical: true },
    { product: "Producto Y", stock: 5, critical: true },
    { product: "Producto Z", stock: 8, critical: false },
  ];

  const featuredProducts = [
    { name: "Producto A", progress: 85 },
    { name: "Producto B", progress: 72 },
    { name: "Producto C", progress: 64 },
    { name: "Producto D", progress: 45 },
  ];

  const newCustomers = [
    { name: "Cliente F", joinDate: "Hoy" },
    { name: "Cliente G", joinDate: "Ayer" },
    { name: "Cliente H", joinDate: "2 días" },
  ];

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Header */}
      <header className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 md:mb-0">
            Panel de Control
          </h1>
          <button
            onClick={toggleDarkMode}
            className="flex items-center justify-center p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-yellow-300"
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Tabs */}
        <nav className="flex flex-wrap gap-2 md:gap-4">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`px-4 py-2 rounded-lg flex items-center ${
              activeTab === "dashboard"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            }`}
          >
            <HomeIcon className="h-5 w-5 mr-2" />
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab("ventas")}
            className={`px-4 py-2 rounded-lg flex items-center ${
              activeTab === "ventas"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            }`}
          >
            <ShoppingCartIcon className="h-5 w-5 mr-2" />
            Ventas
          </button>
          <button
            onClick={() => setActiveTab("pedidos")}
            className={`px-4 py-2 rounded-lg flex items-center ${
              activeTab === "pedidos"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            }`}
          >
            <ClipboardListIcon className="h-5 w-5 mr-2" />
            Pedidos
          </button>
          <button
            onClick={() => setActiveTab("tareas")}
            className={`px-4 py-2 rounded-lg flex items-center ${
              activeTab === "tareas"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            }`}
          >
            <CheckCircleIcon className="h-5 w-5 mr-2" />
            Tareas
          </button>
          <button
            onClick={() => setActiveTab("usuarios")}
            className={`px-4 py-2 rounded-lg flex items-center ${
              activeTab === "usuarios"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            }`}
          >
            <UsersIcon className="h-5 w-5 mr-2" />
            Usuarios
          </button>
        </nav>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex items-center"
        >
          <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 mr-4">
            <CurrencyDollarIcon className="h-6 w-6 text-blue-500 dark:text-blue-300" />
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Ventas Totales
            </p>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              $24,780
            </h3>
            <p className="text-green-500 flex items-center text-sm">
              <ArrowUpIcon className="h-4 w-4 mr-1" />
              12.5% vs mes pasado
            </p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex items-center"
        >
          <div className="p-3 rounded-full bg-green-100 dark:bg-green-900 mr-4">
            <ShoppingBagIcon className="h-6 w-6 text-green-500 dark:text-green-300" />
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Pedidos</p>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              1,245
            </h3>
            <p className="text-green-500 flex items-center text-sm">
              <ArrowUpIcon className="h-4 w-4 mr-1" />
              8.2% vs mes pasado
            </p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex items-center"
        >
          <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 mr-4">
            <ShoppingBagIcon className="h-6 w-6 text-blue-500 dark:text-blue-300" />
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Pedidos Pendientes
            </p>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              15
            </h3>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex items-center"
        >
          <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900 mr-4">
            <UserAddIcon className="h-6 w-6 text-purple-500 dark:text-purple-300" />
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Nuevos Clientes
            </p>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              48
            </h3>
            <p className="text-red-500 flex items-center text-sm">
              <ArrowDownIcon className="h-4 w-4 mr-1" />
              3.1% vs mes pasado
            </p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex items-center"
        >
          <div className="p-3 rounded-full bg-yellow-100 dark:bg-yellow-900 mr-4">
            <CreditCardIcon className="h-6 w-6 text-yellow-500 dark:text-yellow-300" />
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Ingreso Promedio
            </p>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              $89.34
            </h3>
            <p className="text-green-500 flex items-center text-sm">
              <ArrowUpIcon className="h-4 w-4 mr-1" />
              5.7% vs mes pasado
            </p>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Sales Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 lg:col-span-2"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Ventas Mensuales
            </h2>
            <select className="bg-gray-100 dark:bg-gray-700 border-none rounded-lg text-sm px-3 py-1">
              <option>Últimos 6 meses</option>
              <option>Último año</option>
            </select>
          </div>
          <div className="h-80">
            <Line
              data={salesData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: "top",
                    labels: {
                      color: darkMode ? "#fff" : "#000",
                    },
                  },
                },
                scales: {
                  x: {
                    grid: {
                      color: darkMode
                        ? "rgba(255, 255, 255, 0.1)"
                        : "rgba(0, 0, 0, 0.1)",
                    },
                    ticks: {
                      color: darkMode ? "#fff" : "#000",
                    },
                  },
                  y: {
                    grid: {
                      color: darkMode
                        ? "rgba(255, 255, 255, 0.1)"
                        : "rgba(0, 0, 0, 0.1)",
                    },
                    ticks: {
                      color: darkMode ? "#fff" : "#000",
                    },
                  },
                },
              }}
            />
          </div>
        </motion.div>

        {/* Best Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
        >
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Mejores Productos
          </h2>
          <div className="h-80">
            <Doughnut
              data={bestProductsData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: "right",
                    labels: {
                      color: darkMode ? "#fff" : "#000",
                    },
                  },
                },
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Weekly Income */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
        >
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Ingresos Semanales
          </h2>
          <div className="h-64">
            <Bar
              data={weeklyIncomeData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: "top",
                    labels: {
                      color: darkMode ? "#fff" : "#000",
                    },
                  },
                },
                scales: {
                  x: {
                    grid: {
                      color: darkMode
                        ? "rgba(255, 255, 255, 0.1)"
                        : "rgba(0, 0, 0, 0.1)",
                    },
                    ticks: {
                      color: darkMode ? "#fff" : "#000",
                    },
                  },
                  y: {
                    grid: {
                      color: darkMode
                        ? "rgba(255, 255, 255, 0.1)"
                        : "rgba(0, 0, 0, 0.1)",
                    },
                    ticks: {
                      color: darkMode ? "#fff" : "#000",
                    },
                  },
                },
              }}
            />
          </div>
        </motion.div>

        {/* Alerts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Alertas
            </h2>
            <div className="relative">
              <BellIcon className="h-6 w-6 text-yellow-500" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </div>
          </div>
          <div className="space-y-4">
            {alerts.map((alert, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg flex items-center ${
                  alert.critical
                    ? "bg-red-50 dark:bg-red-900/30"
                    : "bg-yellow-50 dark:bg-yellow-900/30"
                }`}
              >
                <div
                  className={`p-2 rounded-full mr-3 ${
                    alert.critical
                      ? "bg-red-100 dark:bg-red-800"
                      : "bg-yellow-100 dark:bg-yellow-800"
                  }`}
                >
                  <BellIcon
                    className={`h-5 w-5 ${
                      alert.critical
                        ? "text-red-500 dark:text-red-300"
                        : "text-yellow-500 dark:text-yellow-300"
                    }`}
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">
                    {alert.product}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Stock bajo: {alert.stock} unidades
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Orders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
        >
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Pedidos Recientes
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-2 text-gray-600 dark:text-gray-300 text-sm font-medium">
                    ID
                  </th>
                  <th className="text-left py-2 text-gray-600 dark:text-gray-300 text-sm font-medium">
                    Cliente
                  </th>
                  <th className="text-left py-2 text-gray-600 dark:text-gray-300 text-sm font-medium">
                    Monto
                  </th>
                  <th className="text-left py-2 text-gray-600 dark:text-gray-300 text-sm font-medium">
                    Estado
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 dark:border-gray-700"
                  >
                    <td className="py-3 text-sm font-medium text-blue-500 dark:text-blue-300">
                      {order.id}
                    </td>
                    <td className="py-3 text-sm text-gray-800 dark:text-gray-200">
                      {order.customer}
                    </td>
                    <td className="py-3 text-sm text-gray-800 dark:text-gray-200">
                      {order.amount}
                    </td>
                    <td className="py-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          order.status === "Entregado"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            : order.status === "En curso"
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>

      {/* Third Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Weekly Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
        >
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Progreso Semanal
          </h2>
          <div className="h-64">
            <Line
              data={weeklyProgressData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: "top",
                    labels: {
                      color: darkMode ? "#fff" : "#000",
                    },
                  },
                },
                scales: {
                  x: {
                    grid: {
                      color: darkMode
                        ? "rgba(255, 255, 255, 0.1)"
                        : "rgba(0, 0, 0, 0.1)",
                    },
                    ticks: {
                      color: darkMode ? "#fff" : "#000",
                    },
                  },
                  y: {
                    grid: {
                      color: darkMode
                        ? "rgba(255, 255, 255, 0.1)"
                        : "rgba(0, 0, 0, 0.1)",
                    },
                    ticks: {
                      color: darkMode ? "#fff" : "#000",
                    },
                  },
                },
              }}
            />
          </div>
        </motion.div>

        {/* Channel Conversion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
        >
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Conversión por Canal
          </h2>
          <div className="h-64">
            <Doughnut
              data={channelData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: "right",
                    labels: {
                      color: darkMode ? "#fff" : "#000",
                    },
                  },
                },
              }}
            />
          </div>
        </motion.div>

        {/* Featured Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
        >
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Productos Destacados
          </h2>
          <div className="space-y-4">
            {featuredProducts.map((product, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-800 dark:text-white">
                    {product.name}
                  </span>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {product.progress}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${product.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Fourth Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
        >
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Métodos de Pago
          </h2>
          <div className="h-64">
            <Doughnut
              data={paymentMethodsData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: "right",
                    labels: {
                      color: darkMode ? "#fff" : "#000",
                    },
                  },
                },
              }}
            />
          </div>
        </motion.div>

        {/* New Customers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Nuevos Clientes
            </h2>
            <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
              +12 esta semana
            </div>
          </div>
          <div className="space-y-4">
            {newCustomers.map((customer, index) => (
              <div
                key={index}
                className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div className="bg-blue-100 dark:bg-blue-900 h-10 w-10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-500 dark:text-blue-300 font-medium">
                    {customer.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">
                    {customer.name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Se unió {customer.joinDate}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Tasks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
        >
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Tareas Recientes
          </h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" checked />
              <div>
                <p className="font-medium text-gray-800 dark:text-white line-through">
                  Actualizar inventario
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Completado hoy
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" checked />
              <div>
                <p className="font-medium text-gray-800 dark:text-white line-through">
                  Revisar pedidos pendientes
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Completado ayer
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <div>
                <p className="font-medium text-gray-800 dark:text-white">
                  Contactar nuevos clientes
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Para hoy
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <div>
                <p className="font-medium text-gray-800 dark:text-white">
                  Preparar reporte mensual
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Para mañana
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
