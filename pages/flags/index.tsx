import { Country } from "../../interfaces";
import Layout from "../../components/Layout";
// import CountryList from "../../components/CountryList";
import RegionDropdown from "../../components/RegionDropdown";
import { InputGroup, Form, Container, Row, Col } from "react-bootstrap";
import CountryCard from "../../components/CountryCard";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { GetServerSideProps } from "next/types";
// import ListCountryItem from "../../components/ListCountryItem";

type Props = {
  countries: Country[];
};

const WithServerSideProps = ({ countries }: Props) => {
  const [query, setQuery] = useState("");
  const [filterRegion, setFilterRegion] = useState("");
  const classes = `darkCardRow px-0 g-0`;
  const colors = {
    color: "#000",
    // backgroundColor: '23px'
  };
  const box = {
    color: "green",
    fontSize: "23px",
  };
  const filterFunction = ({ name, region }: Country) => {
    const inRegion = filterRegion // test if countries.region froms props includes our filterRegion state (by default true because no filter
      ? // is an empty string)
        region.toLowerCase().includes(filterRegion.toLowerCase())
      : true;
    const filterSearch = query // test if if countries.name.common contains the query typed
      ? name.common.toLowerCase().includes(query.toLowerCase())
      : true;
    return inRegion && filterSearch; // return true if both conditions are true, else return false
  };

  return (
    <Layout>
      {/* Search Fields */}
      <Row>
        <Col xs={7} md={6} lg={3}>
          <InputGroup className="inputFilter">
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Control
              style={{ color: "#000000" }}
              className="fromControlFilter"
              placeholder="Search for a country..."
              aria-label={query}
              aria-describedby="basic-addon1"
              onChange={(e) => setQuery(e.target.value)}
            />
          </InputGroup>
        </Col>
        <Col  xs={10} md={6} lg={7}>
        </Col>
        <Col xs={10} md={6} lg={2}>
        {/* we pass to the child a callback (state) so that it can update our state. we also pass our state so it can render the button's name */}
        <RegionDropdown
          filterRegion={filterRegion}
          setFilterRegion={setFilterRegion}
        />
        </Col>
      </Row>
      <Container fluid>
        <Row style={{ justifyContent: "center" }}>
          {/* CountryCard Grid */}
          {countries &&
            countries.filter(filterFunction).map((country: Country) => (
              <Col className={classes} key={country.ccn3} xs={10} md={6} lg={2}>
                <CountryCard country={country} />
              </Col>
            ))}
        </Row>
      </Container>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  );
};
export default WithServerSideProps;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,population,capital,region,flags,ccn3"
  );
  const countries = await res.json();
  return {
    props: {
      countries,
    },
  };
};
