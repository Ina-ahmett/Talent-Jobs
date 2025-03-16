import { useState } from "react";

const Sidebar = () => {
  const [active, setActive] = useState("Customers");

  const menuItems = [
    { name: "Dashboard", icon: "fa-th-large" },
    { name: "Product", icon: "fa-box" },
    { name: "Customers", icon: "fa-user" },
    { name: "Income", icon: "fa-money-bill" },
    { name: "Promote", icon: "fa-bullhorn" },
    { name: "Help", icon: "fa-question-circle" },
  ];

  return (
    <div className="w-64 h-screen bg-white shadow-md p-5">
      <h1 className="text-xl font-bold flex items-center gap-2">
        <span className="border border-black p-1 rounded-full">⬡</span> Dashboard <span className="text-gray-400 text-xs">v.01</span>
      </h1>
      <ul className="mt-8">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`flex items-center gap-3 p-3 my-2 rounded-lg cursor-pointer transition-all ${
              active === item.name ? "bg-purple-600 text-white" : "text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => setActive(item.name)}
          >
            <i className={`fas ${item.icon}`}></i> {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
