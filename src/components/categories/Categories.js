import "./_categories.scss";
import { keywords } from "./keywords";
import { useState } from "react";

function Categories() {
  const [activeKeyword, setActiveKeyword] = useState("All");

  const handleClick = (keyword) => {
    setActiveKeyword(keyword);
  };

  return (
    <div className="categoriesBar">
      {keywords.map((keyword, index) => (
        <span
          onClick={() => handleClick(keyword)}
          key={index}
          className={activeKeyword === keyword ? "active" : ""}
        >
          {keyword}
        </span>
      ))}
    </div>
  );
}

export default Categories;
