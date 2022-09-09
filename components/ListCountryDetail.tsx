import next from "next";
import * as React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Country } from "../interfaces";
import Link from "next/link";

type ListDetailProps = {
  item: Country;
};

const ListCountryDetail = ({ item: country }: ListDetailProps) => (
  <div>
    <Container fluid className="details-container">
      <Row>
        <Col xs={2} md={2} lg={1}>
          <Link href="/flags">
            <Button className="backButton">{"<--"}&nbsp;&nbsp;Back</Button>
          </Link>
        </Col>
        <Col xs={10} md={10} lg={2}></Col>
      </Row>
      <Row>
        <Col xs={6} md={6} lg={6}>
          <img className="img-shadow"
            style={{ width: "65%" }}
            // className="flagImg"
            src={country.flags.svg}
          ></img>
        </Col>
        <Col xs={6} md={6} lg={6}>
          <Row lg={1}>
            <h4>{country.name.common}</h4>
          </Row>
          <Row className="details-row" lg={1}>
            <Col xs={6} md={6} lg={6}>
              <b>Native Name:</b> {Object.values(country.name.nativeName)[0].common}
            </Col>
            <Col xs={6} md={6} lg={6}>
            <b>Top Level Domain:</b> {country.tld[0]}
            </Col>
          </Row>
          <Row className="details-row" lg={1}>
            <Col xs={6} md={6} lg={6}>
            <b>Population:</b> {country.population}
            </Col>
            <Col xs={6} md={6} lg={6}>
            <b>Currencies:</b> {Object.values(country.currencies)[0].name}
            </Col>
          </Row>
          <Row className="details-row" lg={1}>
            <Col xs={6} md={6} lg={6}>
            <b>Region:</b> {country.region}
            </Col>
            <Col xs={6} md={6} lg={6}>
            <b>Languages:</b> {nextKey(country.languages)}
            </Col>
          </Row>
          <Row className="details-row" lg={1}>
            <Col xs={6} md={6} lg={6}>
            <b>Sub Region:</b> {country.subregion}
            </Col>
            <Col xs={6} md={6} lg={6}></Col>
          </Row>
          <Row className="details-row" lg={1}>
            <Col xs={6} md={6} lg={6}>
            <b>Capital:</b> {country.capital[0]}
            </Col>
            <Col xs={6} md={6} lg={6}></Col>
          </Row>
          <Row className="details-row" lg={7}>
            <Col xs={6} md={6} lg={10} style={{ flexDirection: "column" }}>
              {country.borders && (
                <>
              <b>Borders:</b>
              {country.borders.map((item) => {
                return <Button className="border-btn" key={item}>{item}</Button>;
              })}</>)}
            </Col>
            <Col xs={6} md={6} lg={2}></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </div>
);

function nextKey(object) {
  let keys = [];
  let fields: string[] = [];
  for (let key in object) {
    if (object.hasOwnProperty(key))
      keys.push(key);
  }
  for (let i = 0; i < keys.length; i++) {
    fields[i] = object[keys[i]];
    if (i < keys.length - 1) 
      fields[i] += ", ";
  }
  return fields;
}

// function getCommon(object, language) {
//   return object[language].common;
// }

export default ListCountryDetail;
