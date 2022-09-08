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
    <Container fluid>
      <Row>
        <Col xs={2} md={2} lg={2}>
        <Link href="/flags">
      <Button className="backButton">-- Back</Button>
      </Link>
      </Col>
      <Col xs={10} md={10} lg={10}>
      </Col>
      </Row>
      <Row>
        <Col xs={6} md={6} lg={6}>
          <img
            style={{ width: "65%" }}
            className="flagImg"
            src={country.flags.png}
          ></img>
        </Col>
        <Col xs={6} md={6} lg={6}>
          <Row lg={1}>
            <h4>{country.name.common}</h4>
          </Row>
          <Row lg={1}>
            <Col xs={6} md={6} lg={6}>
              Native Name: {Object.values(country.name.nativeName)[0].common}
            </Col>
            <Col xs={6} md={6} lg={6}>
              Top Level Domain: {country.tld[0]}
            </Col>
          </Row>
          <Row lg={1}>
            <Col xs={6} md={6} lg={6}>
              Population: {country.population}
            </Col>
            <Col xs={6} md={6} lg={6}>
              Currencies: {Object.values(country.currencies)[0].name}
            </Col>
          </Row>
          <Row lg={1}>
            <Col xs={6} md={6} lg={6}>
              Region: {country.region}
            </Col>
            <Col xs={6} md={6} lg={6}>
              Languages : {nextKey(country.languages)}
            </Col>
          </Row>
          <Row lg={1}>
            <Col xs={6} md={6} lg={6}>
              Sub Region: {country.subregion}
            </Col>
            <Col xs={6} md={6} lg={6}></Col>
          </Row>
          <Row lg={1}>
            <Col xs={6} md={6} lg={6}>
              Capital: {country.capital[0]}
            </Col>
            <Col xs={6} md={6} lg={6}></Col>
          </Row>
          <Row lg={7}>
            <Col xs={6} md={6} lg={10} style={{ flexDirection: "column" }}>
              Borders:{" "}
              {country.borders.map((item) => {
                return <Button key={item}>{item}</Button>;
              })}
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
    if (object.hasOwnProperty(key)) keys.push(key);
  }
  for (let i = 0; i < keys.length; i++) {
    fields[i] = object[keys[i]];
    if (i < keys.length - 1) fields[i] += ", ";
  }
  return fields;
}

// function getCommon(object, language) {
//   return object[language].common;
// }

export default ListCountryDetail;
