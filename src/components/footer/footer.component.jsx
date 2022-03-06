import React from "react";
import { ReactComponent as Logo } from "../../assets/leaf-1.svg";
import SocialMedia from "../../components/social-media/social-media.component";


import "./footer.styles.css";

const Footer = () => (
    <div className="footer">
        <p>&copy; {new Date().getFullYear()} - Viviana Vergara C.</p>
        <div className="info-social-media">
            <div className="logo-content">
                <Logo />
                <span>HappyPlant</span>
            </div>
            <SocialMedia />
        </div>
    </div>
);

export default Footer;