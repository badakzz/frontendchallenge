// import { GetStaticProps, GetStaticPaths } from 'next'
import { CountryCard } from '../../interfaces'
// import Layout from '../../components/Layout'
// // import ListDetail from '../../components/ListDetail'

// type Props = {
//   item?: CountryCard
//   errors?: string
// }

// const StaticPropsDetail = ({ item, errors }: Props) => {
//   if (errors) {
//     return (
//       <Layout title="Error | Next.js + TypeScript Example">
//         <p>
//           <span style={{ color: 'red' }}>Error:</span> {errors}
//         </p>
//       </Layout>
//     )
//   }

//   return (
//     <Layout
//       title={`${
//         item ? item.capital : 'CountryCard Detail'
//       } | Next.js + TypeScript Example`}
//     >
//       <h1>{item.capital}</h1>
//     </Layout>
//   )
// }

// export default StaticPropsDetail

// export const getStaticPaths: GetStaticPaths = async () => {
//   // Get the paths we want to pre-render based on CountryCards
//   const res = await fetch(
//     "https://restcountries.com/v3.1/alpha/"
//   );
//   const countries: CountryCard[] = await res.json();
//   const paths = countries.map((country) => ({
//     params: { ccn3: country.ccn3.toString() },
//   }))

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false }
// }

// // This function gets called at build time on server-side.
// // It won't be called on client-side, so you can even do
// // direct database queries.
// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   try {
//     const ccn3 = params?.ccn3
//     const res = await fetch('https://restcountries.com/v3.1/alpha/' + ccn3);
//     const data: CountryCard = await res.json();
//     return { props: { data } }
//   } catch (err: any) {
//     return { props: { errors: err.message } }
//   }
// }


export const getStaticPaths = async () => {
  const res = await fetch('https://restcountries.com/v3.1/all/');
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map(country => {
    return {
      params: { id: country.ccn3}
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.ccn3;
  const res = await fetch('https://restcountries.com/v3.1/alpha/' + id);
  const data = await res.json();

  return {
    props: { ninja: data }
  }
}

const Details = ({ ninja }) => {
  return (
    <div>
      <h1>{ ninja.name.common }</h1>
    
    </div>
  );
}

export default Details;