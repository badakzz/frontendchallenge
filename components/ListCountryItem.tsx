import React from 'react'
import Link from 'next/link'
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { CountryCard } from '../interfaces'

type Props = {
  data: CountryCard
}

const ListCountryItem = ({ data }: Props) => (

    <Link href={'/flags/' + data.ccn3} key={data.ccn3}>
          <Col className="darkCardRow" key={data.name.official} xs={12} md={2} lg={2}>
            <Row style={{maxWidth:'100%'}} className="imgContainer">
              <img className="flagImg" src={data.flags.png}></img>
            </Row>
            <div className="darkText">
              <Row><h5>{data.name.common}</h5></Row>
              <Row>Population : {data.population}</Row>
              <Row>Region : {data.region}</Row>
              <Row>Capital : {data.capital}</Row>
            </div>
          </Col>
          </Link>

)

export default ListCountryItem
