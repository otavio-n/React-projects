import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import data from "./data";
const allCategories = ["all", ...new Set(data.map((item) => item.category))];

export default function App() {
  const [menuItems, setMenuItems] = useState(data);
  // const [categories, setCategories] = useState(allCategories);

  function filterItems(category) {
    if (category === "all") {
      setMenuItems(data);
    } else {
      const newItems = data.filter((item) => item.category === category);
      setMenuItems(newItems);
    }
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"> </div>
        </div>
        <Categories categories={allCategories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}
