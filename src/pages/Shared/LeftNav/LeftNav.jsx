import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EditorsNavSide from "../../EditorsNavSide/EditorsNavSide.jsx";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://the-world-daily-news-server-mytoi8q3b-firozhossain82.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h4 className="my-4">All Category</h4>
      <div className="ps-4 ">
        {categories.map((category) => (
          <p key={category.id}>
            <Link to={`/category/${category.id}`} className="text-black fw-semibold text-decoration-none">{category.name}</Link>
          </p>
        ))}
      </div>
      <EditorsNavSide></EditorsNavSide>
    </div>
  );
};

export default LeftNav;
