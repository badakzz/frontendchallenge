import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { Country } from "../../interfaces/";
import ListCountryDetail from "../../components/ListCountryDetail";
import Layout from "../../components/Layout";

export default function CountryDetails({ countries }: { countries: Country }) {
  return (
    <Layout title={countries[0] ? countries[0].name.common : "Country Details"}>
      {countries[0] && <ListCountryDetail item={countries[0]} />}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.id;
  const res = await fetch("https://restcountries.com/v3.1/alpha/" + id);
  const countries = await res.json();
  return { props: { countries } };
}
