import React from "react";

export default function Categories({ categories, filterItems }) {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button onClick={() => filterItems(category)} className="filter-btn" key={index}>
            {category}
          </button>
        );
      })}
    </div>
  );
}
