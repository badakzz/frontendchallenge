import { GetStaticProps } from 'next'
import Link from 'next/link'
import { CountryCard } from '../../interfaces'
import Layout from '../../components/Layout'
import CountryList from '../../components/CountryList'
import { Card, Container, Row, Col, Button } from "react-bootstrap";

type Props = {
  items: CountryCard[]
}

const WithStaticProps = ({ items }: Props) => (
  <Layout title="CountryCards List | Next.js + TypeScript Example">
    <h1>Flags List</h1>
    {console.log(items)}
    <p>

      {items?.map((item) => {
        return (
          <div key={item?.ccn3}>
            <Link href={`/countriesStatic/` + item.ccn3}>
              <h2>{item.name.common}</h2>
            </Link>
          </div>
        );
      })}
    </p>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,population,capital,region,flags,ccn3"
  );
  const items: CountryCard[] = await res.json();
  // console.log(countries)
  return { props: { items } }
}

export default WithStaticProps
