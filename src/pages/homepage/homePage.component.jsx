import React, { Fragment } from "react"
import Category from "../../components/categories/category.component";
import Banner from "../../components/banner/banner.component";
import PlantsPreview from "../../components/plants-preview/plants-preview.component";
import banner1 from "../../assets/banner-1.jpg";
import banner2 from "../../assets/banner-2.jpg";
import banner4 from "../../assets/banner-3.jpg";

import PLANTS_DATA from "../../pages/plants/plants.data";

import "./homePage.styles.css"

class HomePage extends React.Component {
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
        <Banner src={banner1} />
        <Category />
        <Banner src={banner2} />
        <div className="container-card">
          <span className="title">Las más visitadas</span>
          {plants.filter((item, id) => id < 4).map((plants) => (
            <PlantsPreview key={plants.id} {...plants} />
          ))}
        </div>
        <Banner src={banner4} />
      </Fragment>
    );
  }
}

export default HomePage;