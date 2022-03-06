import React from "react"
import CategoryItem from "../category-item/category-item.component";

import "./category.styles.css";

class Category extends React.Component {
    constructor() {
        super();
        this.state = {
            category: [
                {
                    id: 1,
                    titulo: "Plantas de interior",
                    imagenSrc: "category-1",
                    linkUrl: ""
                },
                {
                    id: 2,
                    titulo: "Plantas de exterior",
                    imagenSrc: "category-2",
                    linkUrl: ""
                },
                {
                    id: 3,
                    titulo: "Plantas para la oficina",
                    imagenSrc: "category-3",
                    linkUrl: ""
                }
            ]
        };
    }

    render() {
        return (
            <div className="content-category">
                {this.state.category.map(({ id, ...otherCategoryProps }) => (
                    <CategoryItem key={id} {...otherCategoryProps} />
                ))}
            </div>
        );
    }
}

export default Category;
