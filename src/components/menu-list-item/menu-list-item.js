import React from "react";
import "./menu-list-item.scss";
// import Salad from "./salad.svg";
// import Pizza from "./pizza.svg";
// import Meat from "./meat.svg";

const MenuListItem = ({ menuItem }) => {
  const { title, price, url, category } = menuItem;

  // switch (category) {
  //   case "salads":
  //     return "salad";
  //   case "meat":
  //     return "meat"
  // }

  return (
    <li className="menu__item">
      <div className="menu__title">{title}</div>
      <img className="menu__img" src={url} alt={title}></img>
      <div className="menu__category">
        Category: <span>{category}</span>
        <div className={category}></div>
      </div>
      <div className="menu__price">
        Price: <span>{price}$</span>
      </div>
      <button className="menu__btn">Add to cart</button>
    </li>
  );
};

export default MenuListItem;

// первоначальный вид компонента
// const MenuListItem = () => {
//   return (
//     <>
//       <li className="menu__item">
//         <div className="menu__title">Cesar salad</div>
//         <img
//           className="menu__img"
//           src="https://static.1000.menu/img/content/21458/-salat-cezar-s-kr-salat-cezar-s-krevetkami-s-maionezom_1501173720_1_max.jpg"
//           alt="Cesar salad"
//         ></img>
//         <div className="menu__category">
//           Category: <span>salads</span>
//         </div>
//         <div className="menu__price">
//           Price: <span>12$</span>
//         </div>
//         <button className="menu__btn">Add to cart</button>
//       </li>
//       <li className="menu__item">
//         <div className="menu__title">Cesar salad</div>
//         <img
//           className="menu__img"
//           src="https://static.1000.menu/img/content/21458/-salat-cezar-s-kr-salat-cezar-s-krevetkami-s-maionezom_1501173720_1_max.jpg"
//           alt="Cesar salad"
//         ></img>
//         <div className="menu__category">
//           Category: <span>salads</span>
//         </div>
//         <div className="menu__price">
//           Price: <span>12$</span>
//         </div>
//         <button className="menu__btn">Add to cart</button>
//       </li>
//     </>
//   );
// };

// export default MenuListItem;
