import React from "react";
import { Link } from "react-router-dom";

import "./category-item.styles.css"

const CategoryItem = ({ titulo, imagenSrc, linkUrl }) => (
  <div className="category-item">
    <img src={require('../../assets/' + imagenSrc + '.png')} alt="" />
    <div className="text">
      <span>{titulo}</span>
      <Link className="link-item" to={linkUrl}>ver más</Link>
    </div>
  </div>
);


export default CategoryItem;
