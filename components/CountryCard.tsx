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
    <Row style={{ maxWidth: "100%" }} className="imgContainer">
        <img className="flagImg" src={country.flags.png}></img>
      </Row>
      <div className="darkText">
        <Row>
          <h5>{country.name.common}</h5>
        </Row>
        <Row>Population : {country.population}</Row>
        <Row>Region : {country.region}</Row>
        <Row>Capital : {country.capital}</Row>
      </div>
      </div>
    </Link>
  );
};

export default CountryCard;