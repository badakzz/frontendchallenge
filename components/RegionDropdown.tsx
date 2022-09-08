import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

interface RegionDropdownProps {
  filterRegion: string;
  setFilterRegion: any;
}

interface DropdownItemProps {
  region: string;
  handleChange: any;
}

interface ItemProps {
  eventKey: string;
  hidden: boolean;
  regionName: string;
  onClick: () => void;
}

const RegionDropdown = ({
  filterRegion,
  setFilterRegion,
}: RegionDropdownProps) => {
  const [showOptions, setShowOptions] = useState(false);
  const [displayd, setDisplayd] = useState("");
  const regions: string[] = ["Africa", "America", "Asia", "Europe", "Oceania"];

  const handleSelect = (e) => {
    setFilterRegion(e); // using this parent component state function to update it
    setShowOptions(false);
    console.log(e);
    // console.log(e)
    // setSelectedOption(e)
  };

  // const handleClick = (e) => {
  //   setSelectedOption(e)
  // }

  return (
    <>
      <DropdownButton
        onSelect={handleSelect}
        title={filterRegion ? filterRegion : "Filter by Region"}
        onClick={() => setShowOptions(!showOptions)}
      >
        {/* onClick we show the dropdown items*/}
        {/* {showOptions ? 
        <ChevronUpIcon className='w-5 h-5'/> :
        <ChevronDownIcon className='w-5 h-5'/>
        } */}
        {/* {console.log(selectedOption)} */}
        {showOptions && (
          <>
            {console.log(displayd)}
            {console.log(regions)}
            {
              // displayd ? (regions.map((t) => (
              //   <Item
              //     eventKey={t}
              //     key={t}
              //     regionName={t}
              //     hidden={t === displayd}
              //     onClick={() => setDisplayd(t)}
              //   />
              // ))).push(
              //   <Item
              //     eventKey={'yo'}
              //     key={'yo'}
              //     regionName={'yo'}
              //     hidden={'yo' === displayd}
              //     onClick={() => setDisplayd('yo')}
              //     />
              // ) :
              regions.map((t) => (
                <Item
                  eventKey={t}
                  key={t}
                  regionName={t}
                  hidden={t === displayd}
                  onClick={() => setDisplayd(t)}
                />
              ))
            }{" "}
            {console.log(regions)}
            {/* <Dropdown.Item className="hide1" eventKey="Africa">Africa</Dropdown.Item>
          <Dropdown.Item className="hide2" eventKey="America">America</Dropdown.Item>
          <Dropdown.Item className="hide3" eventKey="Asia">Asia</Dropdown.Item>
          <Dropdown.Item className="hide4" eventKey="Europe">Europe</Dropdown.Item>
          <Dropdown.Item className="hide5" eventKey="Oceania">Oceania</Dropdown.Item> */}
          </>
        )}{" "}
      </DropdownButton>
    </>
  );
};
const Item = ({ eventKey, hidden, regionName, onClick }: ItemProps) => {
  return (
    <Dropdown.Item
      eventKey={eventKey}
      onClick={onClick}
      className={hidden ? "dropdown-item-hidden dropdown-item" : "dropdown-item-displayed dropdown-item"}
    >
      {regionName}
    </Dropdown.Item>
  );
};

export default RegionDropdown;
