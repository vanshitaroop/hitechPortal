import React from "react";
import "./SideNavigationpanel.css";
import { NavLink } from "react-router-dom";
import HitechLogo from "./hitech_logo.png";

const links = [
    { path: "/CareerApplication", label: "Career Application" },
    { path: "/Employee", label: "Employee" },
    // Add more links as needed
];

const SideNavigation = () => {
    return (
        <section className="SideNavigation">
            <div className="navigationPanel">
                <div className="PortalLogoContainer">
                    <img src={HitechLogo} alt="HitechLogo" />
                </div>
                <div className="FeaturesAndContainers">
                    {links.map((link, index) => (
                        <div key={index}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) => 
                                    isActive ? "activeLink" : ""
                                }
                            >
                                {link.label}
                            </NavLink>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SideNavigation;
