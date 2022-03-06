import React from "react";

import "./plant-item.styles.css";

const PlantItem = ({ nombre, tipo, descripcion, img, cuidados }) => (
    <div className="plant-item">
        <img src={img} alt="" />
        <div className="plant-info">
            <span className="name">{nombre}</span>
            <span className="type">{tipo}</span>
            <span className="description">{descripcion}</span>
            <h3>Cuidados</h3>
            <span className="description"><b>Exposicion: </b>{cuidados.exposicion}</span>
            <span className="description"><b>Temperatura: </b>{cuidados.temperatura}</span>
            <span className="description"><b>Riego: </b>{cuidados.riego}</span>
        </div>
    </div>
);

export default PlantItem;