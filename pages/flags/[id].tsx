import React from "react";
import { GetStaticProps, GetStaticPaths } from 'next'
import { Country } from '../../interfaces/'
import ListCountryDetail from '../../components/ListCountryDetail'
import Layout from '../../components/Layout'


export default function CountryDetails({ countries }: { countries: Country }) {
    console.log(countries)
  return (
    <div style={{ padding: 20 }}>
      {/* <h1>{countries.name.common}</h1> */}
      <Layout
      title={`${
        countries[0] ? countries[0].name.common : 'User Detail'
      } | Next.js + TypeScript Example`}
    >
      {countries[0] && <ListCountryDetail item={countries[0]} />}
    </Layout>
      <hr />
      <p>{countries[0].ccn3}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
    const id = context.params.id;
    const res = await fetch('https://restcountries.com/v3.1/alpha/' + id);
    const countries = await res.json();
  return { props: { countries } };
}