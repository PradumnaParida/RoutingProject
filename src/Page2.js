import React from "react";
import { GoChevronRight, GoChevronUp } from "react-icons/go";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaCreativeCommonsPdAlt, FaCreativeCommons } from "react-icons/fa";
import { RiInformationLine } from "react-icons/ri";
import { MdZoomIn } from "react-icons/md";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardImg,
  CardText,
  CardTitle,
  Container,
  Input,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
} from "reactstrap";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
import "./Page2.css";
export const Page2 = () => {
  return (
    <div>
      <Card id="pageeee">
        <CardHeader id="body1">
          <Container id="heading">
            <Container className="heading1">
              <Container id="headingpadd">
                <CardText id="hh1" tag="h6">
                  Gotta <span id="hh11">HALF-IT</span> Sale!
                </CardText>
                <CardText id="hh2" tag="h1">
                  50% OFF
                </CardText>
                <CardText id="hh3" tag="h5">
                  A La Carte Must-Haves
                </CardText>
              </Container>
            </Container>
            <Container className="heading2">
              <CardImg id="imageh" src="images/headingimage.webp" />
              <Button id="buttonh">
                SHOP SALE
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4vw"
                  height="4vw"
                  fill="currentColor"
                  class="bi bi-play-fill"
                  viewBox="-3 0 18 8"
                >
                  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                </svg>
              </Button>
            </Container>
          </Container>
        </CardHeader>
        <CardBody id="body2">
          <CardTitle id="page2search">
            <span id="newss" tag="h3">
              Journal
            </span>

            <Input
              id="searchtext"
              name="text"
              placeholder="🔍 Search Food, Drinks etc..."
              type="text"
            ></Input>
          </CardTitle>

          <hr />
          <CardBody id="middd">
            <Pagination id="pagii">
              <PaginationItem className="paginati">
                <PaginationLink className="pagih">
                  <BsChevronCompactLeft />
                </PaginationLink>
              </PaginationItem>

              <PaginationItem className="paginati">
                <PaginationLink className="pagih1"> Jan 31</PaginationLink>
              </PaginationItem>
              <PaginationItem className="paginati">
                <PaginationLink className="pagih">
                  <BsChevronCompactRight />
                </PaginationLink>
              </PaginationItem>
            </Pagination>
            <span id="mysty1">
              1700 <span className="mysty">Cals Left =</span> 1700
              <span className="mysty">Goal -</span> 0
              <span className="mysty">Food | </span>0
              <span className="mysty">Activity</span>
            </span>
          </CardBody>

          <CardBody id="cbody4">
            <Table id="cbdy4tbl">
              <div id="cbd40">
                <p id="cbd41">BREAKFAST</p>
                <p id="pqrst">
                  <span id="cbd401">FLEX MEAL OFF </span>
                  <span id="cbd402">
                    <GoChevronUp />
                  </span>
                </p>
              </div>

              <hr></hr>

              <div id="cbd4201">
                <p id="cbd42">
                  <span id="cbd4200">
                    <FaCreativeCommonsPdAlt />
                  </span>
                  Nutrisystem Entree
                </p>

                <p id="cbd4202">
                  <MdZoomIn />
                </p>
              </div>

              <hr id="hr"></hr>

              <div id="cbd4301">
                <p id="cbd43">
                  <span id="cbd4300">
                    <FaCreativeCommons />
                  </span>
                  Power Fuel
                </p>

                <p id="cbd4302">
                  <MdZoomIn />
                </p>
              </div>

              <hr id="hr"></hr>

              <div id="cbd4001">
                <p id="cbd44">
                  <span id="cbd4200">
                    <MdZoomIn />
                  </span>
                  More
                </p>

                <p id="cbd4202"></p>
              </div>
            </Table>

            <table id="ltable">
              <div id="ldiv">
                <p id="l1"> VEGETABLE</p>

                <p id="l2">
                  <GoChevronUp />
                </p>
              </div>

              <hr id="hr"></hr>

              <div id="ldiv2">
                <span id="logos">
                  <RiInformationLine />
                </span>
                <p id="pl2">Vegetables</p>

                <p id="pl3">
                  <MdZoomIn />
                </p>
              </div>

              <hr id="hr"></hr>

              <div id="ldiv2">
                <span id="logos">
                  <RiInformationLine />
                </span>
                <p id="pl2">Vegetables</p>

                <p id="pl3">
                  <MdZoomIn />
                </p>
              </div>

              <hr id="hr"></hr>

              <div id="ldiv2">
                <span id="logos">
                  <RiInformationLine />
                </span>
                <p id="pl2">Vegetables</p>

                <p id="pl3">
                  <MdZoomIn />
                </p>
              </div>
            </table>
          </CardBody>
        </CardBody>
      </Card>
    </div>
  );
};
