import { GetStaticProps } from 'next'
// import Link from 'next/link'
import { CountryCard } from '../../interfaces'
import Layout from '../../components/Layout'
import CountryList from '../../components/CountryList'
import { Card, Container, Row, Col, Button } from "react-bootstrap";

// type Props = {
//   items: CountryCard[]
// }

// const WithStaticProps = ({ items }: Props) => (
//   <Layout title="CountryCards List | Next.js + TypeScript Example">
//     <h1>CountryCards List</h1>
//     <p>
//       Example fetching data from inside <code>getStaticProps()</code>.
//     </p>
//     <p>You are currently on: /CountryCards</p>
//     {console.log(items)}
//     {/* <CountryList items={items} />
//     <p>
//       <Link href="/">
//         <a>Go home</a>
//       </Link>
//     </p> */}
//   </Layout>
// )

// export const getStaticProps: GetStaticProps = async () => {
//   // Example for including static props in a Next.js function component page.
//   // Don't forget to include the respective types for any props passed into
//   // the component.
//   const res = await fetch(
//     "https://restcountries.com/v3.1/all?fields=name,population,capital,region,flags,ccn3"
//   );
//   const countries: CountryCard[] = await res.json();
//   // console.log(countries)
//   return { props: { countries } }
// }

// export default WithStaticProps

import React from "react";
import Link from "next/link"; // DOES NOT WORK
import { useState } from 'react'
import { GetServerSideProps } from "next/types";

type Props = {
  countries: CountryCard[]
}

const WithStaticProps = ({ countries }: Props) => {
  const [query, setQuery] = useState('');
  const changeHandler = (event) => {
    setQuery(event.target.value);
  }
  const filteredCountries = countries.filter((item) => {
    return (item.name.common.toLowerCase().includes(query.toLowerCase()))
  });
  return (
  <Layout title="CountryCards List | Next.js + TypeScript Example">
    <input type='text' value={query} onChange={changeHandler}></input>
    <Container fluid>
      <Row style={{justifyContent:'center'}}>
    <CountryList items={filteredCountries} />
      </Row>
      </Container>
     <p>
       <Link href="/">
         <a>Go home</a>
       </Link>
     </p>
  </Layout>
  )
}
export default WithStaticProps

/*

type CountryCard = {
  flags: {
    png: string;
    svg: string;
  };
  name: {
    common: string;
    official: string;
    nativename: {};
  };
  capital: Array<string>;
  region: string;
  population: string;
  ccn3: string;
};

export default function Home({ posts }: { posts: CountryCard[] }) {
  return (
    <div style={{ padding: 20 }}>
      <h1>Posts</h1>
      <hr />
      {posts?.map((post) => {
        return (
          <div key={post?.ccn3}>
            <Link href={`/flags/${post?.ccn3}`}>
              <h2>{post.name.common}</h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
*/
export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all?fields=name,population,capital,region,flags,ccn3");
  const countries = await res.json();
  return {
    props: {
      countries,
    },
  }
};