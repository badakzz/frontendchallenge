import React, { useState } from 'react'

interface RegionDropdownProps {
  filterRegion: string;
  setFilterRegion: any;
}

interface DropdownItemProps {
  region: string;
  handleChange: any;
}

const RegionDropdown = ({ filterRegion, setFilterRegion }: RegionDropdownProps) => {
  const [showOptions, setShowOptions] = useState(false)

  const handleChange = (region: string) => {
    setFilterRegion(region)
    setShowOptions(false)
  }

  return (
    <>
      <button onClick={() => setShowOptions(!showOptions)}>
        {filterRegion ? filterRegion : "Filter by Region"}
        {/* {showOptions ? 
        <ChevronUpIcon className='w-5 h-5'/> :
        <ChevronDownIcon className='w-5 h-5'/>
        } */}
      </button>
      {showOptions && 
        <span>
          <DropdownItem region="" handleChange={handleChange} />
          <DropdownItem region="Africa" handleChange={handleChange} />
          <DropdownItem region="America" handleChange={handleChange} />
          <DropdownItem region="Asia" handleChange={handleChange} />
          <DropdownItem region="Europe" handleChange={handleChange} />
          <DropdownItem region="Oceania" handleChange={handleChange} />
        </span>
      }
    </>
  )
}

export default RegionDropdown

const DropdownItem = ({ region, handleChange }: DropdownItemProps) => {
  return (
    <button onClick={() => {handleChange(region)}} className='w-[200px] px-6 hover:font-semibold text-left cursor-pointer'>
      {region ? region : "No Filter"}
    </button>
  )
}