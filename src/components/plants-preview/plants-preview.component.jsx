import React from "react";
import { withRouter } from "react-router-dom";

import "./plants-preview.styles.css";

const PlantsPreview = ({ id, nombre, tipo, img, history }) => (
    <div className="card" onClick={() => history.push(`plantas/${id}`)}>
        <img src={img} alt="" />
        <span className="name-plant">{nombre}</span>
        <span className="type-plant">{tipo}</span>
    </div>
);

export default withRouter(PlantsPreview);