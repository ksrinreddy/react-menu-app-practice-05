import React, { useState } from "react";
import items from "./data";
import Categories from "./Categories";
import Menu from "./Menu";

const allCategories = [
  "all",
  ...new Set(items.map((menuItem) => menuItem.category)),
];

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      return setMenuItems(items);
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main className="menu">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </main>
  );
};

export default App;
