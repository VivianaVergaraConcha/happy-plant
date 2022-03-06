import React from "react"
import { useParams } from "react-router-dom";
import PlantItem from "../../components/plant-item/plant-item.component";

import PLANTS_DATA from "../plants/plants.data";

const PlantPage = () => {
  const { id } = useParams();
  const plants = PLANTS_DATA;
  const plant = plants.find(item => item.id === parseInt(id));
  return (
    <PlantItem key={plant.id} {...plant} />
  );
}

export default PlantPage;