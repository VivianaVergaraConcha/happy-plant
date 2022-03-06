import React from "react";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";

import "./social-media.styles.css"

const SocialMedia = () => {
    return (
        <div className="social-media">
            <div className="logo-social-media">
                <Facebook />
            </div>
            <div className="logo-social-media">
                <Instagram />
            </div>
            <div className="logo-twitter">
                <Twitter />
            </div>
        </div>
    );
}

export default SocialMedia;