import React from "react";
import Link from "next/link";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { Country } from "../interfaces";

type ListCountryItemProps = {
  country: Country;
};

const ListCountryItem = ({ country }: ListCountryItemProps) => {
     return (
<Link href={"/flags/" + country.ccn3}><div className="m-6">
          <div>
            <p>
              Population: {country.population.toLocaleString()} <br />
              Region: {country.region} <br />
            </p>
          </div>
        </div>
</Link>  
     )
};

export default ListCountryItem;
