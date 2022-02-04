import React, { Component } from "react";
import { CardImg, Nav, Row } from "react-bootstrap";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { CardBody, CardText } from "reactstrap";
import { Page1 } from "./Page1";
import "./Pnavbar.css";
import { Page2 } from "./Page2";
import { MdAccountCircle } from "react-icons/md";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillBook } from "react-icons/ai";
import { ImLeaf } from "react-icons/im";
import { ImConnection } from "react-icons/im";
import { IoStatsChartSharp, IoCartOutline } from "react-icons/io5";
import { RiStoreLine, RiSettings5Line } from "react-icons/ri";
import { FaPhotoVideo } from "react-icons/fa";
import { BsFillBookmarkStarFill } from "react-icons/bs";
export default class Pnavbar extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <div id="mains">
            <div id="nav">
              <Nav className="flex-column">
                <CardBody body className="text-center">
                  <CardImg id="imgg" src="images/numi_top_logo.png"></CardImg>
                </CardBody>

                <CardText body className="text-center" id="txt">
                  <CardImg
                    id="imgggg"
                    src="images/numi_top_logo (1).png"
                  ></CardImg>
                </CardText>

                <CardBody id="usr">
                  <CardText id="log">
                    <MdAccountCircle id="accountimg"></MdAccountCircle>
                  </CardText>

                  <CardText id="txtlog">
                    sathish <AiFillCaretDown /> <br></br>
                    <span id="spnn">Plan start date:December 17,2021</span>
                  </CardText>
                </CardBody>
                <hr></hr>
                <CardBody id="lst">
                  <Nav.Item className="nav-hover">
                    <Link to="/search-journal" className="nav-link">
                      <AiFillBook /> Journal
                    </Link>
                  </Nav.Item>

                  <Nav.Item className="nav-hover">
                    <Link to="" className="nav-link">
                      <ImLeaf /> The Leaf
                    </Link>
                  </Nav.Item>

                  <Nav.Item className="nav-hover">
                    <Link to="" className="nav-link">
                      <RiStoreLine /> Recipies
                    </Link>
                  </Nav.Item>

                  <Nav.Item className="nav-hover">
                    <Link to="" className="nav-link">
                      <IoStatsChartSharp /> Progress
                    </Link>
                  </Nav.Item>

                  <Nav.Item className="nav-hover">
                    <Link to="/search-news" className="nav-link">
                      <ImConnection /> News Feed
                    </Link>
                  </Nav.Item>

                  <Nav.Item className="nav-hover">
                    <Link to="" className="nav-link">
                      <RiSettings5Line /> Settings
                    </Link>
                  </Nav.Item>

                  <Nav.Item className="nav-hover">
                    <Link to="" className="nav-link">
                      <IoCartOutline /> Shop
                    </Link>
                  </Nav.Item>

                  <Nav.Item className="nav-hover">
                    <Link to="" className="nav-link">
                      <FaPhotoVideo /> Photos
                    </Link>
                  </Nav.Item>
                  <Nav.Item className="nav-hover">
                    <Link to="" className="nav-link">
                      <BsFillBookmarkStarFill /> Badges
                    </Link>
                  </Nav.Item>
                </CardBody>
              </Nav>
            </div>

            <div className="routt">
              <Routes>
                <Route
                  exact
                  path="/search-news/*"
                  element={<Page1></Page1>}
                ></Route>

                <Route
                  exact
                  path="/search-journal/*"
                  element={<Page2></Page2>}
                ></Route>
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
