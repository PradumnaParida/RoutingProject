import React from "react";
import { CardImg, Navbar } from "reactstrap";
import "./Pagenavbar.css";

export const Pagenavbar = () => {
  return (
    <div>
      <Navbar>
        <ul>
          <li className="pagenav">QUICK LINKS:</li>
          <li className="pagenav">NUTRISYSTEM ACCOUNT</li>
          <li className="pagenav">TRACK WITH NUMI</li>
          <li className="pagenav">TIPS & RECIPES ON THE LEAF</li>
          <li className="pagenav1">
            <CardImg id="nslogo" src="images/NS-logo.svg" />
          </li>
        </ul>
      </Navbar>
    </div>
  );
};
