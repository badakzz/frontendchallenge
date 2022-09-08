import { Country } from "../../interfaces";
import Layout from "../../components/Layout";
// import CountryList from "../../components/CountryList";
import RegionDropdown from "../../components/RegionDropdown";
import { Dropdown, Container, Row, Col} from "react-bootstrap";
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

  const filterFunction = ({ name, region }: Country) => {
    const inRegion = filterRegion // test if countries.region froms props includes our filterRegion state (by default true because no filter
                                  // is an empty string)
      ? region.toLowerCase().includes(filterRegion.toLowerCase())
      : true;
    const filterSearch = query // test if if countries.name.common contains the query typed
      ? name.common.toLowerCase().includes(query.toLowerCase())
      : true;
    return inRegion && filterSearch; // return true if both conditions are true, else return false
  };

  return (
    <Layout title="CountryCards List | Next.js + TypeScript Example">
      {/* Search Fields */}
      <input
        className="flex-grow focus:outline-none bg-transparent placeholder:text-light-inputfield placeholder:dark:text-white"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a country..."
      />
      {/* we pass to the child a function (state) so that it can update our state. we also pass our state so it can render the button's name */}
      <RegionDropdown
        filterRegion={filterRegion}
        setFilterRegion={setFilterRegion}
      />
      <Container fluid>
        <Row style={{ justifyContent: "center" }}>
          {/* CountryCard Grid */}
          {countries &&
            countries.filter(filterFunction).map((country: Country) => (
              <Col
                key={country.ccn3}
                className="darkCardRow"
                xs={12}
                md={2}
                lg={2}
              >
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
