import React, { useState } from "react";
import "../style.css";
import Menu from "./MenuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueCategory = [
  ...new Set(
    Menu.map((currenEle) => {
      return currenEle.category;
    })
  ),
  "All",
];
console.log(uniqueCategory);
const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const filterItem = (category) => {
    if (category === "All") {
      return setMenuData(Menu);
    }
    const updatedItem = Menu.filter((currentCate) => {
      return currentCate.category === category;
    });
    setMenuData(updatedItem);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={uniqueCategory} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;
