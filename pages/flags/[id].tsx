import React from "react";
import { GetStaticProps, GetStaticPaths } from 'next'
import { CountryCard } from '../../interfaces/'
import ListCountryDetail from '../../components/ListCountryDetail'
import Layout from '../../components/Layout'



// type CountryCard = {
//     flags: {
//       png: string;
//       svg: string;
//     };
//     name: {
//       common: string;
//       official: string;
//       nativename: {};
//     };
//     capital: Array<string>;
//     region: string;
//     population: string;
//     ccn3: string;
//   };

export default function PostDetail({ countries }: { countries: CountryCard }) {
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

// export const getStaticPaths: GetStaticPaths = async () => {
//     // Get the paths we want to pre-render based on users
//     const res = await fetch('https://restcountries.com/v3.1/all/');
//     const data: CountryCard[] = await res.json();
//     console.log('yo')
//     // map data to an array of path objects with params (id)
//     const paths = data.map(country => {
//       return {
//         params: { id: country.ccn3 }
//       }
//     })
  
//     // We'll pre-render only these paths at build time.
//     // { fallback: false } means other routes should 404.
//     return { paths, fallback: false }
//   }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//     try {
//         console.log('yo')

//       const id = params?.id
//       const res = await fetch('https://restcountries.com/v3.1/alpha/' + id);
//       const item = await res.json();      // By returning { props: item }, the StaticPropsDetail component
//       // will receive `item` as a prop at build time
//       return { props: { item } }
//     } catch (err: any) {
//       return { props: { errors: err.message } }
//     }
//   }