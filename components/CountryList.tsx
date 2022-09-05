import * as React from 'react'
import ListCountryItem from './ListCountryItem'
import { CountryCard } from '../interfaces'

type Props = {
  items: CountryCard[]
}

const CountryList = ({ items }: Props) => {
  return(
  <>
    {items.map((item) => (
        <ListCountryItem key={item.ccn3} data={item} />
    ))}
  </>
  )
}

export default CountryList
