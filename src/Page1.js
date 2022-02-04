import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardImg,
  CardText,
  CardTitle,
  Container,
} from "reactstrap";
import "./Page1.css";
export const Page1 = () => {
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
          <CardTitle id="news" tag="h2">
            News Feed
          </CardTitle>
          <hr />

          <CardBody id="pagebody">
            <CardBody id="dog">
              <CardImg id="imagedog" src="images/dog.jpg" />
              <CardText id="imagetext">Appy Free Fatburn Campaign</CardText>
            </CardBody>
            <CardBody id="data">
              <Button className="imgbutton">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5vw"
                  height="1.5vw"
                  fill="currentColor"
                  class="bi bi-app-indicator"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z" />
                  <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                </svg>
                <span className="spann">All</span>
              </Button>
              <Button className="imgbutton">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5vw"
                  height="1.5vw"
                  fill="currentColor"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <span className="spann">Featured</span>
              </Button>
              <Button className="imgbutton">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5vw"
                  height="1.5vw"
                  fill="currentColor"
                  class="bi bi-flag-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001" />
                </svg>
                <span className="spann">Challenges</span>
              </Button>
              <Button className="imgbutton">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5vw"
                  height="1.5vw"
                  fill="currentColor"
                  class="bi bi-journal-bookmark-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 1h6v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8V1z"
                  />
                  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                </svg>
                <span className="spann">Tips & Recipes</span>
              </Button>
              <Button className="imgbutton">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5vw"
                  height="1.5vw"
                  fill="currentColor"
                  class="bi bi-award"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                </svg>
                <span className="spann">Special offers</span>
              </Button>
              <Button className="imgbutton">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5vw"
                  height="1.5vw"
                  fill="currentColor"
                  class="bi bi-compass-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.5 8.516a7.5 7.5 0 1 1-9.462-7.24A1 1 0 0 1 7 0h2a1 1 0 0 1 .962 1.276 7.503 7.503 0 0 1 5.538 7.24zm-3.61-3.905L6.94 7.439 4.11 12.39l4.95-2.828 2.828-4.95z" />
                </svg>
                <span className="spann">Guides</span>
              </Button>
              <Button className="imgbutton">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5vw"
                  height="1.5vw"
                  fill="currentColor"
                  class="bi bi-file-earmark-zip"
                  viewBox="0 0 16 16"
                >
                  <path d="M5 7.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v.938l.4 1.599a1 1 0 0 1-.416 1.074l-.93.62a1 1 0 0 1-1.11 0l-.929-.62a1 1 0 0 1-.415-1.074L5 8.438V7.5zm2 0H6v.938a1 1 0 0 1-.03.243l-.4 1.598.93.62.929-.62-.4-1.598A1 1 0 0 1 7 8.438V7.5z" />
                  <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1h-2v1h-1v1h1v1h-1v1h1v1H6V5H5V4h1V3H5V2h1V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
                </svg>
                <span className="spann">Best For You</span>
              </Button>
            </CardBody>
          </CardBody>
        </CardBody>
      </Card>
    </div>
  );
};
