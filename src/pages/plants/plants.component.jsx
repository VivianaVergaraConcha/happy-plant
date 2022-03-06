import React, { Fragment } from "react";
import PlantsPreview from "../../components/plants-preview/plants-preview.component";

import "./plants.styles.css"

import PLANTS_DATA from "./plants.data.js";

class PlantsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      plants: PLANTS_DATA,
    };
  }

  render() {
    const { plants } = this.state;
    return (
      <Fragment>
        <hr />
        <span className="title-plants">Plantas</span>
        <hr />
        <div className="container-card">
          {plants.map((plants) => (
            <PlantsPreview key={plants.id} {...plants} />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default PlantsPage;
