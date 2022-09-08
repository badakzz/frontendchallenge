import Link from "next/link";
import { Country } from "../interfaces";
import { Row } from "react-bootstrap";

interface CountryCardProps {
  country: Country;
}

const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <Link href={"/flags/" + country.ccn3}>
      <div>
        {/* previous div needed or getting Error: Multiple children were passed to <Link> with `href` */}
        <Row
          noGutters={true}
          style={{ maxWidth: "100%" }}
          className="imgContainer"
        >
          <img className="flagImg" src={country.flags.svg}></img>
        </Row>
        <div className="darkText">
          <Row noGutters={true}>
            <h5>{country.name.common}</h5>
          </Row>
          <Row noGutters={true}>Population : {country.population}</Row>
          <Row noGutters={true}>Region : {country.region}</Row>
          <Row noGutters={true}>Capital : {country.capital}</Row>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
