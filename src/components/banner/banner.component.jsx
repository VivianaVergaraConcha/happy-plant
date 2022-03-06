import React from "react";

import "./banner.styles.css";

const Banner = (props) => (
    <div className="banner-content">
        <img src={props.src} className="imagen-banner" />
    </div>
);

export default Banner;
