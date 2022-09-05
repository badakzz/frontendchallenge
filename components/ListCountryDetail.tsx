import * as React from 'react'
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { CountryCard } from '../interfaces'

type ListDetailProps = {
  item: CountryCard
}

const ListCountryDetail = ({ item: country }: ListDetailProps) => (
  <div>
    {console.log(country)}
    <Container fluid>
    <Row>
      <Col>
      <img className="flagImg" src={country.flags.png}></img>
      </Col>
      <Col>
        <Col>
          <Row>
            {country.name.common}
          </Row>
          <Row>
            {/* Native Name: {nextKey(country.name.nativeName)} */}
          </Row>
          <Row>
            Population: {country.population}
          </Row>
          <Row>
            Region: {country.region}
          </Row>
          <Row>
            Sub Region: {country.subregion}
          </Row>
          <Row>
            Capital: {country.capital[0]}
          </Row>
        </Col>
        <Col>
          <Row>
            Top Level Domain: {country.tld[0]}
          </Row>
          <Row>
            Currencies: {
            country.currencies.getCurrencyField(country.currencies).name}
          </Row>
          <Row>
            Languages : {nextKey(country.languages)}
          </Row>
        </Col>
        <Row>
        </Row>
      </Col>
    </Row>
      {country.borders.forEach((item) => {
        <h6>{item}</h6>
      })}
    </Container>
  </div>
)

function getCurrencyField (object): string {
  let keys = [];
  for (let key in object) {      
     if (object.hasOwnProperty(key)) 
      keys.push(key);
 }
 return keys[0];
}

function nextKey (object) {
  let keys = [];
  let fields: string[] = [];
  for (let key in object) {      
     if (object.hasOwnProperty(key)) 
      keys.push(key);
 }
 for (let i=0; i < keys.length; i++) { 
  fields[i] = object[keys[i]];
  if (i < keys.length - 1)
    fields[i] += ', '
} 
return (fields);
}

// function getCommon(object, language) {
//   return object[language].common;
// }

export default ListCountryDetail
