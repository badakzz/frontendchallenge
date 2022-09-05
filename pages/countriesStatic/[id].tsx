import React from "react";
import { GetStaticProps, GetStaticPaths } from 'next'
import { CountryCard } from '../../interfaces/'


export default function CountryDetail({ country }: { country: CountryCard }) {
    console.log(country)
  return (
      <p>{country[0].ccn3}</p>
  );
}


export const getStaticPaths: GetStaticPaths = async () => {
    // Get the paths we want to pre-render based on users
    const res = await fetch('https://restcountries.com/v3.1/all?fields=name,population,capital,region,flags,ccn3');
    const data: CountryCard[] = await res.json();
    // map data to an array of path objects with params (id)
    const paths = data.map(country => {
      return {
        params: { id: country.ccn3 }
      }
    })
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }

export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        console.log('yo')

      const id = params?.id
      const res = await fetch('https://restcountries.com/v3.1/alpha/' + id);
      const country = await res.json();      // By returning { props: country }, the StaticPropsDetail component
      // will receive `country` as a prop at build time
      return { props: { country } }
    } catch (err: any) {
      return { props: { errors: err.message } }
    }
  }