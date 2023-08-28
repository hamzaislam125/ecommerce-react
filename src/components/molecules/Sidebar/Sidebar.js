import React from "react";
import Button from "../../atoms/Button/Button";
import "./Sidebar.scss";

export default function Sidebar({ filteredCategory, handleProduct }) {
  return (
    <aside className="sidebar">
      {filteredCategory.map((category) => (
        <Button
          onClick={() => handleProduct(category.categoryID)}
          key={category.categoryID}
          className={"sidebar__button"}
        >
          {category.name}
        </Button>
      ))}
    </aside>
  );
}
