import React from "react";
import { NavLink } from "react-router-dom"; // Use NavLink for active styling

const Sidebar = () => {
  const menuItems = [
    { to: "/admin/part1.1", name: "Part 1.1 Questions" },
    { to: "/admin/part1.2", name: "Part 1.2 Sets" },
    { to: "/admin/part2", name: "Part 2 Sets" },
    { to: "/admin/part3", name: "Part 3 Topics" },
    { to: "/admin/wordbank", name: "Word Bank" },
  ];

  return (
    <aside className="dashboard-sidebar">
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} className={({ isActive }) => (isActive ? "active" : "")}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
