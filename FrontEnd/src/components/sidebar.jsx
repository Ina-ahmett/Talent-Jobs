import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [active, setActive] = useState("Dashboard");
  const navigate = useNavigate(); // Isticmaal navigate si aad page ugu wareejiso

  const menuItems = [
    { name: "Dashboard", icon: "fa-th-large", path: "/dashboard"  },
    { name: "Companies", icon: "fa-box", path: "/Reading" }, // Companies page
  ];

  return (
    <div className="w-64 fixed h-screen bg-white shadow-md p-5">
      <h1 className="text-xl font-bold flex items-center gap-2">
        <span className="border border-black p-1 rounded-full">⬡</span> Dashboard 
      </h1>
      <ul className="mt-8">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`flex items-center gap-3 p-3 my-2 rounded-lg cursor-pointer transition-all ${
              active === item.name ? "bg-purple-600 text-white" : "text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => {
              setActive(item.name);
              navigate(item.path); // Wareeji page-ka
            }}
          >
            <i className={`fas ${item.icon}`}></i> {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
